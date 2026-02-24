document.addEventListener("DOMContentLoaded", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const host = tab?.url?.startsWith("http") ? new URL(tab.url).hostname : null;

    //#region DOM ELEMENATI
    const elements = {
        radioBtn: document.getElementById("radioBtn"),
        radioVol: document.getElementById("radioVol"),
        masterVol: document.getElementById("masterVol"),
        volText: document.getElementById("volText"),
        colorBtn: document.getElementById("colorBtn"),
        nightToggle: document.getElementById("nightToggle"),
        copyToggle: document.getElementById("copyToggle"),
        ytToggle: document.getElementById("ytToggle"),
        rulerBtn: document.getElementById("rulerBtn"),
        markerBtn: document.getElementById("markerBtn"),
        screenBtn: document.getElementById("screenBtn"),
        resetVolBtn: document.getElementById("resetVolBtn"),
        clearCacheBtn: document.getElementById("clearCacheBtn"),
        fontBtn: document.getElementById("fontBtn"),
        notesBtn: document.getElementById("notesBtn"),
        trackerBtn: document.getElementById("trackerBtn"),
        counterBtn: document.getElementById("counterBtn"),
        stopwatchBtn: document.getElementById("stopwatchBtn"),
        cookieModal: document.getElementById("cookieModal"),
        cookieToggle: document.getElementById("cookieToggle"),
        confirmClearCache: document.getElementById("confirmClearCache"),
        closeCookieModal: document.getElementById("closeCookieModal"),
    };

    const mainView = document.getElementById("mainView");
    const notesView = document.getElementById("notesView");
    const noteArea = document.getElementById("noteArea");
    const saveIndicator = document.getElementById("saveIndicator");
    const backBtn = document.getElementById("backBtn");
    //#endregion

    //#region INICIJALNO STANJE
    const stateIds = ["nightToggle", "ytToggle", "copyToggle"];
    const keysToGet = [...stateIds];
    
    if (host) {
        keysToGet.push(host);
        keysToGet.push(host + "_vol");
    }

    chrome.storage.local.get(keysToGet, (res) => {
        if (chrome.runtime.lastError) return;

        stateIds.forEach(id => {
            if (elements[id] && res[id] !== undefined) elements[id].checked = res[id];
        });

        if (host) {
            if (res[host] !== undefined) elements.copyToggle.checked = res[host];
            const savedVol = res[host + "_vol"] || 100;
            if(elements.masterVol) elements.masterVol.value = savedVol;
            if(elements.volText) elements.volText.textContent = savedVol + "%";
        } else {
            // Isključi kontrole koje ne rade na sistemskim stranicama
            if (elements.copyToggle) elements.copyToggle.disabled = true;
            if (elements.masterVol) elements.masterVol.disabled = true;
        }
    });

    elements.copyToggle?.addEventListener("change", () => {
        if (host) {
            chrome.storage.local.set({ [host]: elements.copyToggle.checked }, () => {
                chrome.tabs.reload(tab.id);
            });
        }
    });

    elements.ytToggle?.addEventListener("change", (e) => {
        chrome.storage.local.set({ ytToggle: e.target.checked });
    });
    //#endregion

    //#region RADIO
    chrome.runtime.sendMessage({ action: "getRadioStatus" }, (response) => {
        if (response && elements.radioBtn) {
            elements.radioBtn.innerText = response.playing ? "Pause" : "Play";
            if (elements.radioVol) elements.radioVol.value = response.volume;
        }
    });

    elements.radioVol?.addEventListener("input", () => {
        const val = parseInt(elements.radioVol.value);
        chrome.storage.local.set({ volume: val });
        chrome.runtime.sendMessage({ action: "setRadioVolume", value: val });
    });

    elements.radioBtn?.addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "toggleRadio" }, (res) => {
            if (res) {
                elements.radioBtn.textContent = res.playing ? "Pause" : "Play";
                if (!res.playing) elements.radioVol.value = 12;
            }
        });
    });

    const tooltip = document.createElement('div');
tooltip.className = 'sliderTooltip';
document.body.appendChild(tooltip);

const sliders = document.querySelectorAll('.range-slider');

sliders.forEach(slider => {
  slider.addEventListener('input', () => {
    const val = slider.value;
    const min = slider.min || 0;
    const max = slider.max || 100;
    const percent = (val - min) / (max - min);
    
    tooltip.textContent = val + '%';
    tooltip.style.opacity = '1';

    const rect = slider.getBoundingClientRect();
    const thumbWidth = 12; 
    const offset = (rect.width - thumbWidth) * percent;
    
    const tooltipX = rect.left + (thumbWidth / 2) + offset;
    const tooltipY = rect.top - 25; 

    tooltip.style.left = tooltipX + 'px';
    tooltip.style.top = tooltipY + 'px';
  });

  slider.addEventListener('change', () => {
     setTimeout(() => { tooltip.style.opacity = '0'; }, 500);
  });
    });

    //#endregion

    //#region VOLUME MASTER
    const updateVolume = (val) => {
        if (!host) return;
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            world: "MAIN",
            func: (v) => {
                window.aioCtx = window.aioCtx || new AudioContext();
                window.aioGain = window.aioGain || window.aioCtx.createGain();
                if (window.aioCtx.state === "suspended") window.aioCtx.resume();
                document.querySelectorAll("video, audio").forEach(m => {
                    if (!m.dataset.aio) {
                        try {
                            const src = window.aioCtx.createMediaElementSource(m);
                            src.connect(window.aioGain);
                            window.aioGain.connect(window.aioCtx.destination);
                            m.dataset.aio = "true";
                        } catch(e) {}
                    }
                });
                window.aioGain.gain.value = v / 100;
            },
            args: [val]
        });
    };

    elements.masterVol?.addEventListener("input", (e) => {
        const val = e.target.value;
        elements.volText.textContent = val + "%";
        if (host) {
            chrome.storage.local.set({ [host + "_vol"]: val });
            updateVolume(val);
        }
    });

    elements.resetVolBtn?.addEventListener("click", () => {
        elements.masterVol.value = 100;
        elements.volText.textContent = "100%";
        if (host) {
            chrome.storage.local.set({ [host + "_vol"]: 100 });
            updateVolume(100);
        }
    });
    //#endregion

    //#region COLOR PICKER, NIGHT MODE, RULLER, MARKER
    elements.colorBtn?.addEventListener("click", async () => {
        const textSpan = elements.colorBtn.querySelector("span");
        const originalText = "Color Picker";

        try {
            textSpan.textContent = "Biranje...";
            const ed = new EyeDropper();
            const res = await ed.open();
            await navigator.clipboard.writeText(res.sRGBHex);
            textSpan.textContent = `Kopirano: ${res.sRGBHex}`;
            setTimeout(() => {
                textSpan.textContent = originalText;
            }, 2000);
        } catch (err) {
            textSpan.textContent = originalText;
        }
    });

    elements.nightToggle?.addEventListener("change", (e) => {
        chrome.storage.local.set({ nightToggle: e.target.checked });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (on) => {
                const f = on ? "invert(1) hue-rotate(180deg)" : "";
                document.documentElement.style.filter = f;
                document.querySelectorAll("img, video").forEach(i => i.style.filter = f);
            },
            args: [e.target.checked]
        });
    });

    elements.rulerBtn?.addEventListener("click", () => {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
                if (document.getElementById("aioRulOv")) return;
                const ov = document.createElement("div");
                const r = document.createElement("div");
                ov.id = "aioRulOv";
                r.id = "aioRul";
                ov.style = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:999998;cursor:crosshair;background:transparent;";
                r.style = "position:fixed;border:1px solid #00ff88;background:rgba(0,255,136,0.1);z-index:999999;pointer-events:none;display:flex;align-items:center;justify-content:center;font-family: 'Inter', sans-serif;box-shadow:0 0 15px rgba(0,255,136,0.2); transition: none;";
                document.body.append(ov, r);
                
                let sx, sy, drag = false;
                ov.onmousedown = (e) => { sx = e.clientX; sy = e.clientY; drag = false; r.style.width = "0px"; r.style.height = "0px"; r.innerHTML = ""; };
                ov.onmousemove = (e) => {
                    if (e.buttons === 1) {
                        drag = true;
                        const w = Math.abs(e.clientX - sx), h = Math.abs(e.clientY - sy);
                        r.style.left = Math.min(e.clientX, sx) + "px";
                        r.style.top = Math.min(e.clientY, sy) + "px";
                        r.style.width = w + "px"; 
                        r.style.height = h + "px"; 
                        
                        r.innerHTML = `
                            <div style="background:rgba(0,0,0,0.75); padding:6px 12px; border-radius:8px; color:#00ff88; font-size:14px; font-weight:600; backdrop-filter:blur(4px); border:1px solid rgba(0,255,136,0.3); display:flex; gap:10px; box-shadow:0 4px 15px rgba(0,0,0,0.5);">
                                <span><span style="color:#fff; opacity:0.7;">W:</span> ${w}px</span>
                                <span style="color:rgba(255,255,255,0.2);">|</span>
                                <span><span style="color:#fff; opacity:0.7;">H:</span> ${h}px</span>
                            </div>
                        `;
                    }
                };
                ov.onmouseup = () => { if (!drag) { ov.remove(); r.remove(); } };
                const esc = (e) => { if (e.key === "Escape") { ov.remove(); r.remove(); document.removeEventListener("keydown", esc); } };
                document.addEventListener("keydown", esc);
            }
        });
        window.close();
    });

    elements.markerBtn?.addEventListener("click", () => {
        chrome.storage.local.get(['selectedColor'], (data) => {
            const color = data.selectedColor || "#00ff88";
            chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["marker_engine.js"] }, () => {
                setTimeout(() => { chrome.tabs.sendMessage(tab.id, { action: "initMarkerColor", color }); }, 100);
                window.close();
            });
        });
    });
    //#endregion

    //#region SCREENSHOT
    if (elements.screenBtn) {
        elements.screenBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            elements.screenBtn.innerText = "Pripremam...";

            try {
                const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

                if (!tab || tab.url.startsWith("chrome://") || tab.url.startsWith("edge://")) {
                    alert("Sistemske stranice nije dozvoljeno slikati.");
                    elements.screenBtn.innerText = "Screenshot";
                    return;
                }

                // Magija pre slikanja
                await chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    func: async () => {
                    // 1. Ukloni đubre
                    const junkSelectors = [
                        '[id*="cookie"]', '[class*="cookie"]', 
                        '[id*="consent"]', '[class*="consent"]',
                        '[class*="gdpr"]', '.drift-widget-container', 
                        '#intercom-container', '[id*="chat"]'
                    ];
                    junkSelectors.forEach(selector => {
                        document.querySelectorAll(selector).forEach(el => el.style.display = 'none');
                    });

                    // 2. Forsiraj slike
                    document.querySelectorAll("img").forEach(img => {
                        if (img.loading === "lazy") img.loading = "eager";
                        if (img.src) img.src = img.src; 
                    });

                    // 3. Skroluj polako do dna
                    const totalHeight = document.documentElement.scrollHeight;
                    const vh = window.innerHeight;
                    for (let y = 0; y < totalHeight; y += vh) {
                        window.scrollTo(0, y);
                        await new Promise(res => setTimeout(res, 500));
                    }
                    
                    // 4. KLJUČNO Zadrži se na dnu 1.5 sekundu da bi se futer ikonice učitale
                    window.scrollTo(0, document.documentElement.scrollHeight);
                    await new Promise(res => setTimeout(res, 1000));
                    
                    // 5. Vrati se na vrh i sačekaj još malo pred slikanje
                    window.scrollTo(0, 0);
                    await new Promise(res => setTimeout(res, 1000));
                }
                });

                elements.screenBtn.innerText = "Slikam...";

                chrome.runtime.sendMessage({ action: "fullScreenshot", tabId: tab.id }, () => {
                    window.close();
                });
            } catch (err) {
                alert("Greška: " + err.message);
                elements.screenBtn.innerText = "Screenshot";
            }
        });
    }
    //#endregion

    //#region KOLACICI I KES
    elements.clearCacheBtn.onclick = (e) => {
        e.preventDefault();
        elements.cookieModal.style.display = "flex";
    };

    document.getElementById("closeCookieModal").onclick = () => {
        elements.cookieModal.style.display = "none";
    };

    document.getElementById("realClearBtn").onclick = async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (!tab || !tab.url.startsWith("http")) return;
        
        const url = new URL(tab.url);
        const btn = document.getElementById("realClearBtn");

        chrome.browsingData.remove(
            { origins: [url.origin] }, 
            { "cache": true, "cacheStorage": true, "cookies": true, "localStorage": true }, 
            () => {
                btn.innerText = "Obrisano!";
                setTimeout(() => {
                    btn.innerText = "Obriši keš i kolačiće";
                    elements.cookieModal.style.display = "none";
                    chrome.tabs.reload(tab.id);
                }, 1000);
            }
        );
    };

    chrome.storage.local.get(["cookieBlock"], (res) => {
        elements.cookieToggle.checked = res.cookieBlock || false;
    });

    elements.cookieToggle.onchange = async (e) => {
        const isChecked = e.target.checked;
        await chrome.storage.local.set({ cookieBlock: isChecked });
        
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab?.url?.startsWith("http")) {
            chrome.tabs.reload(tab.id);
        }
    };
    document.getElementById("realClearBtn").onclick = async () => {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (!tab?.url?.startsWith("http")) return;
        
        const url = new URL(tab.url);
        const btn = document.getElementById("realClearBtn");

        chrome.browsingData.remove(
            { origins: [url.origin] }, 
            { "cache": true, "cacheStorage": true, "cookies": true, "localStorage": true }, 
            () => {
                btn.innerText = "Obrisano!";
                setTimeout(() => {
                    btn.innerText = "Obriši keš i kolačiće";
                    elements.cookieModal.style.display = "none";
                    chrome.tabs.reload(tab.id);
                }, 1000);
            }
        );
    };
    //#endregion

    //#region FONT PICKER
    if (elements.fontBtn) {
        elements.fontBtn.addEventListener("click", async () => {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    const tooltip = document.createElement("div");
                    tooltip.style.cssText = `
                        position: fixed;
                        pointer-events: none;
                        background: #16161e;
                        color: #00ff88;
                        padding: 8px 12px;
                        border-radius: 8px;
                        font-family: 'Inter', sans-serif;
                        font-size: 14px;
                        font-weight: bold;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
                        border: 1px solid #00ff88;
                        z-index: 999999;
                        transform: translate(15px, 15px);
                        display: none;
                    `;
                    document.body.appendChild(tooltip);

                    const styleTag = document.createElement("style");
                    styleTag.innerHTML = "*{ cursor: default !important; }";
                    document.head.appendChild(styleTag);

                    const moveHandler = (e) => {
                        const el = document.elementFromPoint(e.clientX, e.clientY);
                        if (!el) {
                            tooltip.style.display = 'none';
                            return;
                        }
                        const rawFont = window.getComputedStyle(el).fontFamily;
                        const cistFont = rawFont.split(',')[0].replace(/['"]/g, '').trim();
                        
                        tooltip.style.display = 'block';
                        tooltip.innerHTML = "<span style='color: #a0a0a8; font-size: 10px; display: block; margin-bottom: 2px;'>Font:</span>" + cistFont;
                        tooltip.style.left = e.clientX + "px";
                        tooltip.style.top = e.clientY + "px";
                    };

                    const clickHandler = async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        const el = document.elementFromPoint(e.clientX, e.clientY);
                        if (!el) return;

                        const rawFont = window.getComputedStyle(el).fontFamily;
                        const cistFont = rawFont.split(',')[0].replace(/['"]/g, '').trim();
                        
                        try {
                            await navigator.clipboard.writeText(cistFont);
                        } catch(err) {}

                        document.removeEventListener("mousemove", moveHandler, true);
                        document.removeEventListener("click", clickHandler, true);
                        tooltip.remove();
                        styleTag.remove();

                        const toast = document.createElement("div");
                        toast.innerHTML = "<span style='color: #a0a0a8; font-size: 12px; display: block; margin-bottom: 4px;'>Kopirano!</span>" + cistFont;
                        toast.style.cssText = `
                            position: fixed;
                            bottom: 30px;
                            left: 50%;
                            transform: translateX(-50%);
                            background: #16161e;
                            color: #00ff88;
                            padding: 15px 25px;
                            border-radius: 12px;
                            font-family: 'Inter', sans-serif;
                            font-size: 16px;
                            font-weight: bold;
                            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
                            border: 1px solid #00ff88;
                            z-index: 999999;
                            opacity: 0;
                            transition: opacity 0.3s ease, transform 0.3s ease;
                            text-align: center;
                        `;
                        document.body.appendChild(toast);

                        setTimeout(() => {
                            toast.style.opacity = "1";
                            toast.style.transform = "translateX(-50%) translateY(-10px)";
                        }, 10);

                        setTimeout(() => {
                            toast.style.opacity = "0";
                            toast.style.transform = "translateX(-50%) translateY(0)";
                            setTimeout(() => toast.remove(), 300);
                        }, 3000);
                    };

                    document.addEventListener("mousemove", moveHandler, true);
                    document.addEventListener("click", clickHandler, true);
                }
            });
            window.close();
        });
    }
    //#endregion

    //#region BELEŠKE
    chrome.storage.local.get("mojeBeleske", (res) => {
        if (res.mojeBeleske) noteArea.value = res.mojeBeleske;
    });

    elements.notesBtn.addEventListener("click", () => {
        mainView.style.display = "none";
        notesView.style.display = "flex";
        noteArea.focus();
    });

    backBtn.addEventListener("click", () => {
        notesView.style.display = "none";
        mainView.style.display = "block";
    });

    noteArea.addEventListener("input", () => {
        chrome.storage.local.set({ "mojeBeleske": noteArea.value });
        saveIndicator.style.opacity = "1";
        setTimeout(() => { saveIndicator.style.opacity = "0"; }, 1000);
    });
    //#endregion

    //#region TIME TRACKER
function formatTime(sec) {
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;
        if (h > 0) return `${h}h ${m}m`;
        if (m > 0) return `${m}m ${s}s`;
        return `${s}s`;
    }

    function renderStats() {
        chrome.storage.local.get(null, (items) => {
            const todayDate = new Date();
            const currentMonthPrefix = "tracker_" + todayDate.getFullYear() + "_" + (todayDate.getMonth() + 1) + "_";

            let totalMonth = 0;
            let totalAll = 0;
            let uniqueDays = new Set();

            const selDateObj = new Date(trackerDate.value);
            const selKey = "tracker_" + selDateObj.getFullYear() + "_" + (selDateObj.getMonth() + 1) + "_" + selDateObj.getDate();
            const selMonthPrefix = "tracker_" + selDateObj.getFullYear() + "_" + (selDateObj.getMonth() + 1) + "_";
            const mode = trackerMode.value;

            const isToday = selDateObj.toDateString() === todayDate.toDateString();
            const isThisMonth = selDateObj.getMonth() === todayDate.getMonth() && selDateObj.getFullYear() === todayDate.getFullYear();
            const statTotalLabel = document.getElementById("statTotalLabel");

            if (statTotalLabel) {
                if (mode === "day") {
                    statTotalLabel.textContent = isToday ? "Danas" : "Prikazani dan";
                } else if (mode === "month") {
                    statTotalLabel.textContent = isThisMonth ? "Ovaj mesec" : "Prikazani mesec";
                } else if (mode === "all") {
                    statTotalLabel.textContent = "Ukupno vreme";
                }
            }

            const listTotals = {};
            let listTotalSec = 0;

            for (const key in items) {
                if (!key.startsWith("tracker_")) continue;
                uniqueDays.add(key);

                let dayTotal = 0;
                for (const domain in items[key]) dayTotal += items[key][domain];

                totalAll += dayTotal;
                if (key.startsWith(currentMonthPrefix)) totalMonth += dayTotal;

                let include = false;
                if (mode === "day" && key === selKey) include = true;
                if (mode === "month" && key.startsWith(selMonthPrefix)) include = true;
                if (mode === "all") include = true;

                if (include) {
                    listTotalSec += dayTotal;
                    for (const domain in items[key]) {
                        listTotals[domain] = (listTotals[domain] || 0) + items[key][domain];
                    }
                }
            }

            if (typeof statMonth !== 'undefined' && statMonth) statMonth.textContent = formatTime(totalMonth);
            if (typeof statTotal !== 'undefined' && statTotal) statTotal.textContent = formatTime(listTotalSec);
            
            const daysCount = uniqueDays.size > 0 ? uniqueDays.size : 1;
            if (typeof statAvg !== 'undefined' && statAvg) statAvg.textContent = formatTime(Math.floor(totalAll / daysCount));

            const sorted = Object.entries(listTotals).sort((a, b) => b[1] - a[1]);
            if (typeof trackerList !== 'undefined') trackerList.innerHTML = "";

            if (sorted.length === 0) {
                if (typeof trackerList !== 'undefined') trackerList.innerHTML = "<div style='text-align:center; color:#a0a0a8; margin-top:20px;'>Nema podataka</div>";
                return;
            }

            sorted.forEach(([domain, sec]) => {
                const item = document.createElement("div");
                item.style.cssText = "display: flex; justify-content: space-between; padding: 10px; background: #16161e; margin-bottom: 6px; border-radius: 8px; border: 1px solid #2d2d3d;";
                item.innerHTML = `<span style="font-weight: bold; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 65%;">${domain}</span><span style="color: #00ff88; font-family: monospace;">${formatTime(sec)}</span>`;
                if (typeof trackerList !== 'undefined') trackerList.appendChild(item);
            });
        });
    }

    elements.trackerBtn?.addEventListener("click", () => {
        mainView.style.display = "none";
        if (typeof trackerView !== 'undefined') trackerView.style.display = "flex";
        if (typeof trackerDate !== 'undefined') {
            trackerDate.valueAsDate = new Date();
            trackerDate.max = new Date().toISOString().split("T")[0];
        }
        if (typeof trackerMode !== 'undefined') trackerMode.value = "day";
        renderStats();
    });

    if (typeof trackerDate !== 'undefined') trackerDate?.addEventListener("change", renderStats);
    if (typeof trackerMode !== 'undefined') trackerMode?.addEventListener("change", renderStats);

    if (typeof trackerRefreshBtn !== 'undefined') {
        trackerRefreshBtn?.addEventListener("click", () => {
            renderStats();
            trackerRefreshBtn.style.color = "#00ff88";
            setTimeout(() => trackerRefreshBtn.style.color = "", 500);
        });
    }

    if (typeof trackerBackBtn !== 'undefined') {
        trackerBackBtn?.addEventListener("click", () => {
            if (typeof trackerView !== 'undefined') trackerView.style.display = "none";
            mainView.style.display = "block";
        });
    }
    //#endregion

    //#region BROJAC KARAKTERA
    // Dodaj ove konstante unutar DOMContentLoaded gde su i ostale
    const counterView = document.getElementById("counterView");
    const counterBackBtn = document.getElementById("counterBackBtn");
    const counterArea = document.getElementById("counterArea");
    const charCount = document.getElementById("charCount");
    const wordCount = document.getElementById("wordCount");

    // Otvaranje brojača
    elements.counterBtn?.addEventListener("click", () => {
        mainView.style.display = "none";
        counterView.style.display = "flex";
        counterArea.focus();
    });

    // Povratak na početnu i brisanje teksta
    counterBackBtn?.addEventListener("click", () => {
        counterView.style.display = "none";
        mainView.style.display = "block";
        
        // Resetovanje svega
        counterArea.value = "";
        charCount.innerText = "0";
        wordCount.innerText = "0";
    });

    // Logika brojanja
    counterArea?.addEventListener("input", () => {
        const text = counterArea.value || "";
        charCount.innerText = text.length;
        
        const words = text.trim().split(/\s+/).filter(w => w.length > 0);
        wordCount.innerText = words.length;
    });
        
    //#endregion

    //#region STOPERICA
    let swInterval;

    const swFormat = (ms) => {
        const total = Math.floor(ms / 1000);
        const h = Math.floor(total / 3600).toString().padStart(2, '0');
        const m = Math.floor((total % 3600) / 60).toString().padStart(2, '0');
        const s = (total % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    function swRefreshUI() {
        chrome.storage.local.get(["isRunning", "startTime", "currentLaps"], (data) => {
            const timerEl = document.getElementById("timer");
            const statusEl = document.getElementById("status");
            const lapsList = document.getElementById("laps");

            if (data.isRunning) {
                timerEl.innerText = swFormat(Date.now() - data.startTime);
                statusEl.innerText = "LAJV U TOKU";
                statusEl.style.color = "red";
                statusEl.classList.add("running");
            } else {
                timerEl.innerText = "00:00:00";
                statusEl.innerText = "SPREMAN";
                statusEl.style.color = "var(--text-dim)";
                statusEl.classList.remove("running");
            }

            lapsList.innerHTML = "";
            if (data.currentLaps && data.currentLaps.length > 0) {
                data.currentLaps.slice().reverse().forEach((lapMs, index) => {
                    const li = document.createElement("li");
                    li.innerHTML = `<span>${data.currentLaps.length - index}: </span> <b>${swFormat(lapMs)}</b>`;
                    lapsList.appendChild(li);
                });
            } else {
                lapsList.innerHTML = `<div class="empty-msg">Nema trenutno zabeleženih momenata</div>`;
            }
        });
    }

    function swRenderHistory() {
        chrome.storage.local.get(["history"], (data) => {
            const historyList = document.getElementById("history-list");
            if (!historyList) return;
            historyList.innerHTML = "";
            
            if (data.history && data.history.length > 0) {
                data.history.slice().reverse().forEach((session, idx) => {
                    const realIdx = data.history.length - idx;
                    const details = document.createElement("details");
                    const summary = document.createElement("summary");
                    
                    summary.innerHTML = `<span>Lajv #${realIdx}</span> <small style="color:var(--text-dim); font-weight:normal;">${new Date(session.sessionStart).toLocaleDateString('sr-RS')} ${new Date(session.sessionStart).toLocaleTimeString('sr-RS', {hour: '2-digit', minute:'2-digit'})}</small>`;
                    
                    details.addEventListener("click", function() {
                        if (!this.open) {
                            document.querySelectorAll("#history-list details").forEach(d => {
                                if (d !== this) d.removeAttribute("open");
                            });
                        }
                    });

                    const contentDiv = document.createElement("div");
                    contentDiv.className = "session-content";

                    const ul = document.createElement("ul");
                    ul.style.listStyle = "none"; ul.style.padding = "0";
                    session.laps.forEach((lap, i) => {
                        const li = document.createElement("li");
                        li.style.display = "flex"; li.style.justifyContent = "space-between";
                        li.style.fontSize = "11px"; li.style.padding = "4px 0";
                        li.style.borderBottom = "1px solid rgba(255,255,255,0.03)";
                        li.innerHTML = `<span style="color:var(--text-dim)">Moment ${i+1}</span> <b>${swFormat(lap)}</b>`;
                        ul.appendChild(li);
                    });

                    const downloadBtn = document.createElement("button");
                    downloadBtn.innerText = "EKSPORTUJ KAO .TXT";
                    downloadBtn.className = "export-btn-mini";
                    downloadBtn.onclick = () => {
                        let txt = `LAJV #${realIdx} | ${new Date(session.sessionStart).toLocaleString('sr-RS')}\n--------------------------\n`;
                        session.laps.forEach((l, i) => txt += `${i + 1} - ${swFormat(l)}\n`);
                        const blob = new Blob([txt], {type: "text/plain"});
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url; a.download = `lajv_${realIdx}.txt`; a.click();
                    };

                    contentDiv.appendChild(ul);
                    contentDiv.appendChild(downloadBtn);
                    details.appendChild(summary);
                    details.appendChild(contentDiv);
                    historyList.appendChild(details);
                });
            } else {
                historyList.innerHTML = "<div class='no-history'>Nema istorije lajvova</div>";
            }
        });
    }

    elements.stopwatchBtn?.addEventListener("click", () => {
        mainView.style.display = "none";
        document.getElementById("stopwatchView").style.display = "flex";
        if (swInterval) clearInterval(swInterval);
        swInterval = setInterval(swRefreshUI, 1000);
        swRenderHistory();
        swRefreshUI();
    });

    document.getElementById("swBackBtn")?.addEventListener("click", () => {
        document.getElementById("stopwatchView").style.display = "none";
        mainView.style.display = "block";
        if (swInterval) clearInterval(swInterval);
    });

    document.getElementById("start")?.addEventListener("click", () => {
        chrome.storage.local.set({ isRunning: true, startTime: Date.now(), sessionStart: Date.now(), currentLaps: [] }, swRefreshUI);
    });

    document.getElementById("lap")?.addEventListener("click", () => {
        chrome.storage.local.get(["isRunning", "startTime", "currentLaps"], (data) => {
            if (data.isRunning) {
                const newLaps = [...(data.currentLaps || []), Date.now() - data.startTime];
                chrome.storage.local.set({ currentLaps: newLaps }, swRefreshUI);
            }
        });
    });

    document.getElementById("stop")?.addEventListener("click", () => {
        chrome.storage.local.get(["isRunning", "startTime", "currentLaps", "history", "sessionStart"], (data) => {
            if (!data.isRunning) return;
            const session = { sessionStart: data.sessionStart, laps: data.currentLaps || [] };
            chrome.storage.local.set({ isRunning: false, history: [...(data.history || []), session], startTime: 0, currentLaps: [] }, () => {
                swRefreshUI();
                swRenderHistory();
            });
        });
    });

    const swModal = document.getElementById("customModal");
    document.getElementById("clear-history")?.addEventListener("click", () => {
        if (swModal) swModal.style.display = "flex";
    });
    
    document.getElementById("cancelClear")?.addEventListener("click", () => {
        if (swModal) swModal.style.display = "none";
    });
    
    document.getElementById("confirmClear")?.addEventListener("click", () => {
        chrome.storage.local.set({ history: [] }, () => {
            swRenderHistory();
            if (swModal) swModal.style.display = "none";
        });
    });

    chrome.runtime.onMessage.addListener((msg) => {
        if (msg.action === "update_ui") swRefreshUI();
        elements.radioBtn.innerText = msg.playing ? "Pusta se radio IN..." : "Pause";
    });
    //#endregion
});