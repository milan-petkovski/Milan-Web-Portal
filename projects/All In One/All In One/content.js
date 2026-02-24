const host = window.location.hostname;

// Funkcija za Dark Mode preko CSS injekcije (najbrži i najčistiji način)
const applyDark = (on) => {
  let style = document.getElementById("aio-dark-style");
  if (on) {
    if (!style) {
      style = document.createElement("style");
      style.id = "aio-dark-style";
      style.innerHTML = `
        html { filter: invert(1) hue-rotate(180deg) !important; background: #fff; }
        img, video, iframe, canvas { filter: invert(1) hue-rotate(180deg) !important; }
      `;
      document.documentElement.appendChild(style);
    }
  } else if (style) {
    style.remove();
  }
};

// Funkcija za Enable Copy
const enableCopy = () => {
  const events = ["contextmenu", "copy", "cut", "paste", "selectstart", "mousedown", "mouseup"];
  events.forEach(type => {
    document.addEventListener(type, (e) => e.stopImmediatePropagation(), true);
  });

  if (!document.getElementById("force-copy-fix")) {
    const s = document.createElement("style");
    s.id = "force-copy-fix";
    s.innerHTML = "*{user-select:text!important;-webkit-user-select:text!important;pointer-events:auto!important;}";
    document.documentElement.appendChild(s);
  }
};

// Inicijalna provera pri učitavanju stranice
chrome.storage.local.get([host, "nightToggle"], (res) => {
  if (res.nightToggle) applyDark(true);

  if (res[host]) {
    enableCopy();
    setInterval(enableCopy, 1500);
  }
});

// Slušanje promena u realnom vremenu (da odmah reaguje na klik u popupu)
chrome.storage.onChanged.addListener((changes) => {
  if (changes.nightToggle !== undefined) {
    applyDark(changes.nightToggle.newValue);
  }
});

const killCookies = () => {
    const selectors = [
        '[id*="cookie"]', '[class*="cookie"]', 
        '[id*="consent"]', '[class*="consent"]',
        '.fc-consent-root', '[class*="gdpr"]'
    ];
    selectors.forEach(s => {
        document.querySelectorAll(s).forEach(el => el.remove());
    });
};

chrome.storage.local.get("cookieBlock", (res) => {
    if (res.cookieBlock) {
        killCookies();
        // Prati promene na stranici (ako se baner pojavi kasnije)
        const obs = new MutationObserver(killCookies);
        obs.observe(document.documentElement, { childList: true, subtree: true });
    }
});