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
      if (!linktreeSection || !container) return;
  
      // Provera da li je uređaj desktop (širina > 1024px)
      const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;
  
      let mouseX = 50, mouseY = 50; // Početne vrednosti u procentima
      let targetX = 50, targetY = 50; // Ciljane vrednosti
      let rotateX = 0, rotateY = 0; // Rotacija
      const lerpSpeed = 0.1; // Brzina interpolacije za glatko praćenje
      const maxAngle = 5;

      // Obrada kretanja miša
      const handleMouseMove = (e) => {
        if (isDesktop()) {
          const rect = linktreeSection.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
  
          // Proračuni za 3D rotaciju
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const mouseXPos = e.clientX - rect.left - centerX;
          const mouseYPos = e.clientY - rect.top - centerY;
          targetX = ((e.clientX - containerRect.left) / containerRect.width) * 100;
          targetY = ((e.clientY - containerRect.top) / containerRect.height) * 100;
          rotateY = (mouseXPos / centerX) * maxAngle;
          rotateX = -(mouseYPos / centerY) * maxAngle;
        }
      };

      // Animacija sa requestAnimationFrame
      const updateAnimation = () => {
        if (isDesktop()) {
          // Linearno interpoliraj vrednosti
          mouseX += (targetX - mouseX) * lerpSpeed;
          mouseY += (targetY - mouseY) * lerpSpeed;
          container.style.setProperty('--mouse-x', `${mouseX}%`);
          container.style.setProperty('--mouse-y', `${mouseY}%`);
          container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
        requestAnimationFrame(updateAnimation);
      };

      // Reset na mouseleave
      const handleMouseLeave = () => {
        if (isDesktop()) {
          targetX = 50;
          targetY = 50;
          rotateX = 0;
          rotateY = 0;
          container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
          container.style.setProperty('--mouse-x', '50%');
          container.style.setProperty('--mouse-y', '50%');
        }
      };

      // Postavljanje slušalaca
      linktreeSection.addEventListener('mousemove', handleMouseMove);
      linktreeSection.addEventListener('mouseleave', handleMouseLeave);
      requestAnimationFrame(updateAnimation); // Pokreni animaciju
    });

    function toggleSharePreview() {
      const preview = document.getElementById('share-preview');
      if (preview) {
        preview.style.display = preview.style.display === 'none' ? 'block' : 'none';
      }
    }

    async function shareContent() {
      const shareData = {
        title: 'Milan Petkovski - Junior Full-Stack Web Developer',
        text: 'Check out my Linktree!',
        url: window.location.href,
        files: [],
      };
  
      try {
        const response = await fetch('images/Brands/linktree.png');
        if (!response.ok) throw new Error('Image fetch failed');
        const blob = await response.blob();
        const file = new File([blob], 'linktree.png', { type: blob.type });
        shareData.files.push(file);
      } catch (err) {
        console.error('Error fetching image:', err);
      }
  
      try {
        if (navigator.canShare && navigator.canShare(shareData)) {
          await navigator.share(shareData);
        } else {
          alert('Sharing is not supported on this device.');
        }
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
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


document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");
        const items = document.querySelectorAll(".portfolio-item");
        const sections = document.querySelectorAll(".project h2");

        items.forEach(item => {
            const itemFilter = item.getAttribute("data-filter");
            if (filter === "all" || itemFilter === filter) {
                item.style.display = "block";
                // Pronađi odgovarajući naslov za ovaj projekat
                const section = item.closest(".row").previousElementSibling;
                if (section && section.tagName === "H2") {
                    section.style.display = "block";
                }
            } else {
                item.style.display = "none";
            }
        });

        sections.forEach(section => {
            const relatedItems = Array.from(items).filter(item => 
                item.closest(".row").previousElementSibling === section
            );
            const hasVisibleItems = relatedItems.some(item => item.style.display !== "none");
            section.style.display = hasVisibleItems ? "block" : "none";
        });
    });
});
//#endregion
