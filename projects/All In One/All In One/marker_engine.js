if (!window.markerInjected) {
    window.markerInjected = true;

    // Globalna varijabla za boju
    window.markerCurrentColor = "#00ff88";

    const style = document.createElement('style');
    style.id = 'marker-styles';
    style.innerHTML = `
/* Glavni kontejner sa Glassmorphism efektom */
.marker-menu {
    position: fixed;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    padding: 18px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    z-index: 1000001;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
}

/* Grupa dugmića */
.marker-btns { 
    display: flex; 
    flex-direction: column; 
    gap: 12px; 
}

/* Svi dugmići i color-picker wrapper dobijaju isti oblik */
.marker-menu button, 
.marker-color-picker-wrapper {
    width: 48px; 
    height: 48px; 
    border: none; 
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.1); 
    cursor: pointer;
    font-size: 20px; 
    color: white; 
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex; 
    align-items: center; 
    justify-content: center;
    position: relative;
    box-sizing: border-box;
}

/* Hover efekti za dugmiće */
.marker-menu button:hover { 
    background: #00ff88; 
    color: #000;
    box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
}

/* Aktivno stanje (kad je alat odabran) */
.marker-menu button.active { 
    background: #00ff88; 
    color: #000; 
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.5); 
}

/* Color Picker Specifično */
.marker-color-picker-wrapper {
    border: 2px solid rgba(255, 255, 255, 0.2);
    /* Pozadinska boja će se menjati putem JS-a, ali default je: */
    background: #00ff88; 
}

.marker-color-picker-wrapper:hover {
    transform: scale(1.08);
    border-color: white;
}

#markerColorPicker {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    inset: 0;
}

/* Slider (Veličina markera) */
.marker-menu input[type="range"] { 
    width: 50px; 
    height: 6px;
    accent-color: #00ff88; 
    cursor: pointer; 
    margin-top: 5px;
    opacity: 0.8;
}

.marker-menu input[type="range"]:hover {
    opacity: 1;
}

/* Close/Delete dugme (Crveno) */
.close-btn { 
    background: rgba(255, 68, 68, 0.2) !important; 
    color: #ff4444 !important;
    border: 1px solid rgba(255, 68, 68, 0.3) !important;
}

.close-btn:hover { 
    background: #ff4444 !important; 
    color: white !important; 
    box-shadow: 0 4px 15px rgba(255, 68, 68, 0.4) !important;
}

/* Float-in Tekst Input */
.marker-text-input {
    position: fixed; 
    background: rgba(0, 0, 0, 0.8); 
    backdrop-filter: blur(5px);
    border: 2px dashed #00ff88;
    color: #00ff88; 
    outline: none; 
    padding: 8px 12px; 
    z-index: 1000002;
    font-family: 'Segoe UI', sans-serif; 
    font-weight: bold; 
    border-radius: 8px;
    white-space: nowrap;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}
    `;
    document.head.appendChild(style);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    Object.assign(svg.style, {
        position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh",
        zIndex: "1000000", pointerEvents: "auto", cursor: "crosshair"
    });
    document.body.appendChild(svg);

    const menu = document.createElement("div");
    menu.className = "marker-menu";
    menu.innerHTML = `
        <div class="marker-btns">
            <div class="marker-color-picker-wrapper" id="colorWrapper">
                <input type="color" id="markerColorPicker" value="#00ff88">
            </div>
            <button id="m_brush" class="active" title="Crtaj">✏️</button>
            <button id="m_line" title="Linija">📏</button>
            <button id="m_text" title="Tekst">⌨️</button>
            <button id="m_move" title="Pomeri">🖱️</button>
            <button id="m_eraser" title="Briši">🧽</button>
        </div>
        <input type="range" id="m_size" min="2" max="30" value="5" title="Debljina">
        <button id="m_close" class="close-btn" title="Zatvori">✕</button>
    `;
    document.body.appendChild(menu);

    let mode = "brush";
    let drawing = false;
    let currentElement = null;
    let thickness = 5;

    // Funkcija za čišćenje svega sa stranice
    const removeMarker = () => {
        svg.remove();
        menu.remove();
        const s = document.getElementById('marker-styles');
        if (s) s.remove();
        window.markerInjected = false;
    };

    // Handler za color picker
    const picker = document.getElementById('markerColorPicker');
    const wrapper = document.getElementById('colorWrapper');
    picker.oninput = (e) => {
        window.markerCurrentColor = e.target.value;
        wrapper.style.backgroundColor = window.markerCurrentColor;
        wrapper.style.borderColor = window.markerCurrentColor;
    };

    const updateCursor = () => {
        const cursors = {
            brush: "crosshair",
            line: "crosshair",
            text: "text",
            move: "move",
            eraser: "crosshair"
        };
        svg.style.cursor = cursors[mode] || "default";
    };

    menu.onclick = (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        if (btn.id === "m_close") {
            removeMarker();
            return;
        }
        document.querySelectorAll(".marker-menu button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        mode = btn.id.replace("m_", "");
        updateCursor();
    };

    document.getElementById("m_size").oninput = (e) => thickness = e.target.value;

    const saveText = (input, x, y) => {
        if (input.value.trim()) {
            const txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
            txt.setAttribute("x", x);
            txt.setAttribute("y", y + (thickness * 2.5));
            txt.setAttribute("font-size", thickness * 3);
            txt.setAttribute("fill", window.markerCurrentColor);
            txt.setAttribute("font-family", "Arial");
            txt.setAttribute("font-weight", "bold");
            txt.textContent = input.value;
            setupElement(txt);
            svg.appendChild(txt);
        }
        input.remove();
    };

    svg.onmousedown = (e) => {
        if (mode === "eraser" || mode === "move" || e.target.tagName === "input") return;
        
        drawing = true;
        const x = e.clientX;
        const y = e.clientY;

        if (mode === "text") {
            drawing = false;
            const input = document.createElement("input");
            input.className = "marker-text-input";
            input.style.color = window.markerCurrentColor;
            input.style.borderColor = window.markerCurrentColor;
            Object.assign(input.style, { left: `${x}px`, top: `${y}px`, fontSize: `${thickness * 3}px` });
            document.body.appendChild(input);
            setTimeout(() => input.focus(), 10);
            input.onblur = () => saveText(input, x, y);
            input.onkeydown = (ee) => { if (ee.key === "Enter") input.blur(); };
            return;
        }

        currentElement = document.createElementNS("http://www.w3.org/2000/svg", mode === "line" ? "line" : "polyline");
        currentElement.setAttribute("stroke", window.markerCurrentColor);
        currentElement.setAttribute("stroke-width", thickness);
        currentElement.setAttribute("fill", "none");
        currentElement.setAttribute("stroke-linecap", "round");
        currentElement.setAttribute("stroke-linejoin", "round");

        if (mode === "line") {
            currentElement.setAttribute("x1", x); currentElement.setAttribute("y1", y);
            currentElement.setAttribute("x2", x); currentElement.setAttribute("y2", y);
        } else {
            const p = svg.createSVGPoint(); p.x = x; p.y = y;
            currentElement.points.appendItem(p);
        }

        setupElement(currentElement);
        svg.appendChild(currentElement);
    };

    svg.onmousemove = (e) => {
        if (!drawing || !currentElement) return;
        if (mode === "line") {
            currentElement.setAttribute("x2", e.clientX);
            currentElement.setAttribute("y2", e.clientY);
        } else if (mode === "brush") {
            const p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY;
            currentElement.points.appendItem(p);
        }
    };

    window.onmouseup = () => { drawing = false; currentElement = null; };

    function setupElement(el) {
        el.style.pointerEvents = "auto";
        el.onmouseenter = () => { if (mode === "eraser") el.remove(); };

        let isDragging = false;
        el.onmousedown = (e) => {
            if (mode !== "move") return;
            e.stopPropagation();
            isDragging = true;
            let lastX = e.clientX;
            let lastY = e.clientY;

            const move = (me) => {
                if (!isDragging) return;
                const dx = me.clientX - lastX;
                const dy = me.clientY - lastY;
                lastX = me.clientX;
                lastY = me.clientY;

                if (el.tagName === "polyline") {
                    for (let i = 0; i < el.points.numberOfItems; i++) {
                        el.points.getItem(i).x += dx; el.points.getItem(i).y += dy;
                    }
                } else if (el.tagName === "line") {
                    el.setAttribute("x1", +el.getAttribute("x1") + dx);
                    el.setAttribute("y1", +el.getAttribute("y1") + dy);
                    el.setAttribute("x2", +el.getAttribute("x2") + dx);
                    el.setAttribute("y2", +el.getAttribute("y2") + dy);
                } else if (el.tagName === "text") {
                    el.setAttribute("x", +el.getAttribute("x") + dx);
                    el.setAttribute("y", +el.getAttribute("y") + dy);
                }
            };
            window.addEventListener("mousemove", move);
            window.addEventListener("mouseup", () => { isDragging = false; window.removeEventListener("mousemove", move); }, { once: true });
        };
    }
}

// Listener za primanje boje iz popupa
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "initMarkerColor") {
        window.markerCurrentColor = request.color;
        const picker = document.getElementById('markerColorPicker');
        const wrapper = document.getElementById('colorWrapper');
        if (picker) picker.value = request.color;
        if (wrapper) {
            wrapper.style.backgroundColor = request.color;
            wrapper.style.borderColor = request.color;
        }
    }
});