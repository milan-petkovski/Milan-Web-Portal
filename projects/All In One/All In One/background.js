async function setupOffscreen() {
  if (await chrome.offscreen.hasDocument()) return;
  await chrome.offscreen.createDocument({
    url: 'offscreen.html',
    reasons: ['AUDIO_PLAYBACK'],
    justification: 'Radio streaming'
  });
}

async function checkRealRadioStatus() {
    const hasDocument = await chrome.offscreen.hasDocument();
    if (!hasDocument) {
        await chrome.storage.local.set({ playing: false });
        return false;
    }
    const data = await chrome.storage.local.get('playing');
    return data.playing || false;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleRadio") {
    handleToggle(sendResponse);
    return true;
  }
  
  if (request.action === "setRadioVolume") {
    chrome.storage.local.set({ volume: request.value });
    chrome.runtime.sendMessage({ action: "setVolume", value: request.value }).catch(() => {});
    return true;
  }

    if (request.action === "getRadioStatus") {
    checkRealRadioStatus().then((isActuallyPlaying) => {
      chrome.storage.local.get(['volume'], (data) => {
        sendResponse({ 
          playing: isActuallyPlaying, 
          volume: data.volume !== undefined ? data.volume : 12 
        });
      });
    });
    return true; // Neophodno jer je odgovor asinkron
  }

  if (request.action === "fullScreenshot") {
      const tabId = request.tabId;
      sendResponse({ status: "started" });

      chrome.debugger.attach({ tabId: tabId }, "1.3", () => {
          if (chrome.runtime.lastError) {
              return;
          }

          chrome.debugger.sendCommand({ tabId: tabId }, "Page.getLayoutMetrics", {}, (metrics) => {
              const width = Math.ceil(metrics.cssContentSize ? metrics.cssContentSize.width : metrics.contentSize.width);
              const height = Math.ceil(metrics.cssContentSize ? metrics.cssContentSize.height : metrics.contentSize.height);

              chrome.debugger.sendCommand({ tabId: tabId }, "Page.captureScreenshot", {
                  format: "png",
                  captureBeyondViewport: true,
                  clip: {
                      x: 0,
                      y: 0,
                      width: width,
                      height: height,
                      scale: 1
                  }
              }, (res) => {
                  chrome.debugger.detach({ tabId: tabId });

                  if (res && res.data) {
                      chrome.downloads.download({
                          url: "data:image/png;base64," + res.data,
                          filename: "screenshot.png"
                      });
                  }
              });
          });
      });
      return true;
  }
});

async function handleToggle(sendResponse) {
  await setupOffscreen();
  chrome.storage.local.get(['playing', 'volume'], (data) => {
    const newState = !data.playing;
    const currentVol = data.volume !== undefined ? data.volume : 12;
    
    if (newState) {
      chrome.runtime.sendMessage({ action: "play", volume: currentVol });
    } else {
      chrome.runtime.sendMessage({ action: "pause" });
      chrome.storage.local.set({ volume: 12 });
    }
    
    chrome.storage.local.set({ playing: newState });
    if (sendResponse) sendResponse({ playing: newState });
  });
}


// Postavi detekciju odsustva na 300 sekundi (5 minuta)
chrome.idle.setDetectionInterval(300);

let activeTabId = null;
let lastUpdate = Date.now();

// Glavna funkcija za čuvanje vremena
async function updateTime() {
    const state = await new Promise(resolve => chrome.idle.queryState(300, resolve));
    if (state !== "active") {
        lastUpdate = Date.now();
        return;
    }

    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tabs.length === 0) return;

    const url = tabs[0].url;
    if (!url || !url.startsWith("http")) return;

    const domain = new URL(url).hostname;
    const now = Date.now();
    const diff = Math.round((now - lastUpdate) / 1000);
    
    if (diff > 0 && diff < 10) {
        const today = new Date();
        const dateKey = `tracker_${today.getFullYear()}_${today.getMonth() + 1}_${today.getDate()}`;

        chrome.storage.local.get([dateKey], (res) => {
            const data = res[dateKey] || {};
            data[domain] = (data[domain] || 0) + diff;
            chrome.storage.local.set({ [dateKey]: data });
        });
    }
    lastUpdate = now;
}

// Reaguj na promenu stanja (aktivnost/odsustvo)
chrome.idle.onStateChanged.addListener((newState) => {
    if (newState === "active") {
        lastUpdate = Date.now();
    }
});

// Interval koji kuca svake sekunde, ali updateTime proverava idle stanje
setInterval(updateTime, 1000);



let lastLapTime = 0;

function playSound(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === "success") {
            osc.frequency.value = 800;
            osc.type = "sine";
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        } else {
            osc.frequency.value = 150;
            osc.type = "sawtooth";
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            osc.start();
            osc.stop(ctx.currentTime + 0.3);
        }
    } catch (e) {
    }
}

chrome.commands.onCommand.addListener((command) => {
    if (command === "mark-lap") {
        const now = Date.now();
        if (now - lastLapTime < 1500) return;

        chrome.storage.local.get(["isRunning", "startTime", "currentLaps"], (data) => {
            if (data.isRunning) {
                lastLapTime = now;
                const diff = now - data.startTime;
                const newLaps = [...(data.currentLaps || []), diff];

                chrome.storage.local.set({ currentLaps: newLaps }, () => {
                    chrome.runtime.sendMessage({ action: "update_ui" }).catch(() => {});

                    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                        const activeTab = tabs[0];
                        if (activeTab?.id && !activeTab.url.startsWith("chrome://") && !activeTab.url.startsWith("edge://")) {
                            chrome.scripting.executeScript({
                                target: { tabId: activeTab.id },
                                func: playSound,
                                args: ["success"]
                            }).catch((e) => console.log("Scripting error:", e));
                        }
                    });
                });
            }
        });
    }
});