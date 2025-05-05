//JAVASCRIPT

//#region - HVATAC GRESAKA

let hasError = false;
window.onerror = function(message, source, lineno, colno, error) {
    hasError = true;
    console.error("DOSLO JE DO GREŠKE:");
    console.error("IZVOR: " + source);
    console.error("LINIJA: " + lineno);
    console.error("KOLONA: " + colno);
    console.error("GREŠKA: " + error);
    return true;
};

//#endregion

//#region - COPY TEXT

function copyText() {
    navigator.clipboard.writeText("contact@milanwebportal.com");
    alert("The email has been copied to the temporary memory!");
}

//#endregion

//#region - PRELOADER
const fadeOut = () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("fade");
};
window.addEventListener("load", fadeOut);
  
//#endregion

//#region - OFF F12
document.onkeydown = function (e) {

    if (e.key === 'F12') {
        return false;
    }
    
    if (e.ctrlKey && e.shiftKey && e.key === 'i') {
        return false;
    }
    
    if (e.ctrlKey && e.shiftKey && e.key === 'j') {
        return false;
    }
    
    if (e.ctrlKey && e.key === 'u') {
        return false;
    }
}
  
//#endregion

//#region - POJAVLJIVANJE

document.addEventListener("DOMContentLoaded", () => {
    const pojavljivanjeItems = document.querySelectorAll('.pojavljivanje, #pojavljivanje');

    const isElementInViewport = el => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    };

    const checkVisibility = () => {
        pojavljivanjeItems.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
});

//#endregion

//#region - MOBILNI MENI

const toggleNav = (add) => {
    const nav = document.getElementById('navbar');
    document.body.classList.toggle('no-scroll', add);
    nav.classList.toggle('active', add);
    document[add ? 'addEventListener' : 'removeEventListener']('touchmove', preventScroll, { passive: false });
};

document.getElementById('bar')?.addEventListener('click', () => toggleNav(true));
document.getElementById('close')?.addEventListener('click', () => toggleNav(false));

document.addEventListener('click', (e) => {
    const nav = document.getElementById('navbar');
    if (!nav.contains(e.target) && !document.getElementById('bar').contains(e.target) && nav.classList.contains('active')) {
        toggleNav(false);
    }
});

const voidLinks = document.querySelectorAll('#navbar a[href="javascript:void(0)"]');
voidLinks.forEach(link => {
    link.addEventListener('click', () => toggleNav(false));
});

// Function to prevent scrolling
function preventScroll(e) {
    e.preventDefault();
}
//#endregion

//#region - BACK TO TOP
if (/projects|index|roadmap|payment|\/$/.test(window.location.href)) {
const progressCircle = document.querySelector('#progress circle');
const progressWrapper = document.querySelector('#back-to-top');
const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

const updateTotalHeight = () => document.documentElement.scrollHeight - window.innerHeight;

const handleScroll = () => {
    const totalHeight = updateTotalHeight();
    const scrollPosition = window.scrollY;
    const progressPercentage = (scrollPosition / totalHeight) * circumference;
    progressCircle.style.strokeDashoffset = circumference - progressPercentage;
    progressWrapper.style.opacity = scrollPosition > 30 ? 1 : 0;
};

window.addEventListener('load', handleScroll);
window.addEventListener('resize', handleScroll);
window.onscroll = handleScroll;

document.getElementById('backToTop').onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
}
//#endregion

//#region - SADRZAJ
function sadrzaj() {
    const linkovi = document.getElementById("linkovi");
    linkovi.classList.toggle("hidden");
}

document.querySelectorAll("#linkovi a").forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("linkovi")?.classList.add("hidden");
    });
});
//#endregion

//#region - LINKTREE
if (/linktree|\/$/.test(window.location.href)) {
document.addEventListener('DOMContentLoaded', () => {
    const linktreeSection = document.querySelector('.linktree');
    const container = document.querySelector('.linktree .container');

    linktreeSection.addEventListener('mousemove', (e) => {
        const rect = linktreeSection.getBoundingClientRect();
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const mouseX = e.clientX - rect.left - centerX;
        const mouseY = e.clientY - rect.top - centerY;
        
        const maxAngle = 5;
        const rotateY = (mouseX / centerX) * maxAngle;
        const rotateX = -(mouseY / centerY) * maxAngle;

        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    linktreeSection.addEventListener('mouseleave', () => {
        container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});
}
//#endregion

//#region - PRICING
function openPopup(packageName) {
    const popup = document.getElementById('popupForm');
    const selectElement = document.getElementById('popupPackageSelect');

    popup.style.display = 'flex';
    selectElement.value = packageName;
    document.body.classList.add('popup-active');
    document.documentElement.classList.add('popup-active');
}

function closePopup() {
    const popup = document.getElementById('popupForm');
    popup.style.display = 'none';
    document.body.classList.remove('popup-active');
    document.documentElement.classList.remove('popup-active');
}

window.onclick = function(event) {
    const popup = document.getElementById('popupForm');
    if (event.target === popup) {
        closePopup();
    }
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});


//#endregion

//#region - MY PROJECTS

if (/projects|index|\/$/.test(window.location.href)) {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("view-project-btn")) {
            togglePortfolioPopup();
            document.querySelector(".portfolio-popup").scrollTo(0, 0);
            portfolioItemDetails(e.target.parentElement);
        }
    });

    function togglePortfolioPopup() {
        document.querySelector(".portfolio-popup").classList.toggle("open");
        document.body.classList.toggle("hide-scrolling");
    }

    document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("pp-inner")) {
            togglePortfolioPopup();
        }
    });

    function portfolioItemDetails(portfolioItem) {
        document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
        document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
        document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
    }
}

//#endregion
