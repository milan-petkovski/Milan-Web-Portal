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

//#region - POJAVLJIVANJE
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.pojavljivanje, #pojavljivanje');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
});
//#endregion

//#region - HEADER
if (/projects|index|roadmap|payment|\/$/.test(window.location.href)) {
const header = document.querySelector("header");
const placeholder = document.getElementById("header-placeholder");
const headerHeight = header.offsetHeight;
placeholder.style.height = "0px";

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
        placeholder.style.height = headerHeight + "px";
    } else {
        header.classList.remove("scrolled");
        placeholder.style.height = "0px";
    }
});
}
//Mobilni header
(() => {
    const nav = document.getElementById('navbar');
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const allNavLinks = document.querySelectorAll('.nav-menu a, #navbar a');

    let isOpen = false;
    const preventScroll = (e) => e.preventDefault();

    const openNav = () => {
    if (isOpen || !nav) return;
    isOpen = true;
    nav.classList.add('active');
    if (window.innerWidth < 1024) {
        document.addEventListener('touchmove', preventScroll, { passive: false });
    }
    };

    const closeNav = () => {
    if (!isOpen || !nav) return;
    isOpen = false;
    nav.classList.remove('active');
    if (window.innerWidth < 1024) {
        document.removeEventListener('touchmove', preventScroll);
    }
    };

    bar?.addEventListener('click', openNav);
    close?.addEventListener('click', closeNav);

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (isOpen && nav && !nav.contains(target) && !bar.contains(target)) {
            closeNav();
        }
    });

    nav?.querySelectorAll('a')?.forEach(link => {
        link.addEventListener('click', () => {
            const href = link.getAttribute('href');
            if (!href || href === '#' || href.startsWith('javascript')) return;
            closeNav();
        });
    });

    // Automatski dodaj .active
    const currentPath = location.pathname.replace(/\/$/, '');

    allNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (
            !href ||
            href === '#' ||
            href.startsWith('javascript') ||
            href.startsWith('http') ||
            href.includes('#contact') ||
            href.includes('streamlabs.com')
        ) {
            return;
        }

        const linkPath = href.split('#')[0].replace(/\/$/, '');

        if (
            linkPath === currentPath ||
            (currentPath.endsWith(linkPath) && linkPath !== '')
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
})();
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

//#region - PROJECTS
if (/index|projects|\/$/.test(window.location.href)) {
  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".portfolio-item");
    const headings = [
      "#html-projects-heading",
      "#webflow-projects-heading",
      "#ai-projects-heading",
      "#shopify-projects-heading"
    ].map(id => document.querySelector(id)).filter(Boolean);

    const projectReadmeUrls = {
      'milan-web-portal-button': 'https://raw.githubusercontent.com/milan-petkovski/Milan-Web-Portal/refs/heads/new/README.md',
      'cmagency-project-button': 'https://raw.githubusercontent.com/milan-petkovski/cmagency/main/README.md',
      'leafy-project-button': 'https://raw.githubusercontent.com/milan-petkovski/leafy/main/README.md',
      'grilli-project-button': 'https://raw.githubusercontent.com/milan-petkovski/Milan-Web-Portal/refs/heads/new/projects/Grilli/README.md',
      'tourly-project-button': 'https://raw.githubusercontent.com/milan-petkovski/Milan-Web-Portal/refs/heads/new/projects/Tourly/README.md',
      'tutz-project-button': 'https://raw.githubusercontent.com/milan-petkovski/tutz/main/README.md',
      'gamex-project-button': 'https://raw.githubusercontent.com/milan-petkovski/Milan-Web-Portal/refs/heads/new/projects/GameX/README.md',
      'eduland-project-button': 'https://raw.githubusercontent.com/milan-petkovski/Milan-Web-Portal/refs/heads/new/projects/Eduland/README.md',
      'frosty-project-button': 'https://raw.githubusercontent.com/milan-petkovski/Milan-Web-Portal/refs/heads/new/projects/Frosty/README.md',
      'przionica-project-button': 'https://raw.githubusercontent.com/milan-petkovski/Milan-Web-Portal/refs/heads/new/projects/Przionica/README.md',
      'nexus-project-button': 'https://raw.githubusercontent.com/milan-petkovski/Milan-Web-Portal/refs/heads/new/projects/Nexus/README.md',
      'mipex-project-button': 'https://raw.githubusercontent.com/milan-petkovski/Milan-Web-Portal/refs/heads/new/projects/Mipex/README.md'
    };

    const viewProjectButtons = document.querySelectorAll('.view-project-btn');
    const projectPopup = document.getElementById('project-popup');
    const closeButton = projectPopup.querySelector('.close-button');
    const projectPopupContent = document.getElementById('project-popup-content');

    function loadReadmeContent(readmeUrl) {
      projectPopupContent.innerHTML = '<p>Loading data...</p>';

      fetch(readmeUrl)
        .then(response => {
          if (!response.ok) throw new Error('The network response was incorrect: ' + response.statusText);
          return response.text();
        })
        .then(markdownContent => {
          const htmlContent = marked.parse(markdownContent);
          projectPopupContent.innerHTML = htmlContent;
          projectPopup.classList.add('open');
        })
        .catch(error => {
          console.error('Error loading file:', error);
          projectPopupContent.innerHTML = '<p style="color: red;">Error: Unable to load file.</p>';
          projectPopup.classList.add('open');
        });
    }

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        if (filter === "all") {
          projects.forEach(p => p.style.display = "block");
          headings.forEach(h => h.style.display = "block");
        } else {
          projects.forEach(p => {
            const type = p.getAttribute("data-filter");
            p.style.display = (type === filter) ? "block" : "none";
          });
          headings.forEach(h => h.style.display = "none");
        }
      });
    });

    viewProjectButtons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonId = button.id;
        const readmeUrl = projectReadmeUrls[buttonId];

        if (readmeUrl) {
          loadReadmeContent(readmeUrl);
        } else {
          console.error(`URL for README not found for button with id: ${buttonId}`);
          projectPopupContent.innerHTML = '<p style="color: red;">Error: Project URL not defined.</p>';
          projectPopup.classList.add('open');
        }
      });
    });

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        projectPopup.classList.remove('open');
        projectPopupContent.innerHTML = '';
      });
    }

    if (projectPopup) {
      projectPopup.addEventListener('click', (event) => {
        if (event.target === projectPopup) {
          projectPopup.classList.remove('open');
          projectPopupContent.innerHTML = '';
        }
      });
    }
  });
}
//#endregion

//#region - PAYMENT
if (/payment|\/$/.test(window.location.href)) {
function sadrzaj() {
    const linkovi = document.getElementById("linkovi");
    linkovi.classList.toggle("hidden");
}

document.querySelectorAll("#linkovi a").forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("linkovi")?.classList.add("hidden");
    });
});
}
//#endregion

//#region - LINKTREE
if (/linktree|\/$/.test(window.location.href)) {
    document.addEventListener('DOMContentLoaded', () => {
      const linktreeSection = document.querySelector('.linktree');
      const container = document.querySelector('.linktree .container');
      if (!linktreeSection || !container) return;
  
      // Provera da li je uređaj desktop (širina > 1024px)
      const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;
  
      // Obrada kretanja miša za rotaciju i gradient efekat
      const handleMouseMove = (e) => {
        if (isDesktop()) {
          const rect = linktreeSection.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
  
          // Proračuni za 3D rotaciju
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const mouseX = e.clientX - rect.left - centerX;
          const mouseY = e.clientY - rect.top - centerY;
          const maxAngle = 5;
          const rotateY = (mouseX / centerX) * maxAngle;
          const rotateX = -(mouseY / centerY) * maxAngle;
  
          container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
          // Proračuni za gradient efekat
          const gradientX = ((e.clientX - containerRect.left) / containerRect.width) * 100;
          const gradientY = ((e.clientY - containerRect.top) / containerRect.height) * 100;
          container.style.setProperty('--mouse-x', `${gradientX}%`);
          container.style.setProperty('--mouse-y', `${gradientY}%`);
        }
      };
  
      // Reset na mouseleave
      const handleMouseLeave = () => {
        if (isDesktop()) {
          container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
          container.style.setProperty('--mouse-x', '50%');
          container.style.setProperty('--mouse-y', '50%');
        }
      };
  
      // Postavljanje slušalaca
      linktreeSection.addEventListener('mousemove', handleMouseMove);
      linktreeSection.addEventListener('mouseleave', handleMouseLeave);
    });

    window.toggleSharePreview = function() {
      const preview = document.getElementById('share-preview');
      if (preview) {
        preview.style.display = preview.style.display === 'none' ? 'block' : 'none';
      }
    };

    window.shareContent = async function() {
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
          alert('Deljenje nije podržano na ovom uređaju.');
        }
      } catch (err) {
        console.error('Greška prilikom deljenja:', err);
      }
    };
}
//#endregion

//#region - CONTACT
if (/index|\/$/.test(window.location.href)) {
const popup = document.getElementById('popupForm');
const popupContainer = popup.querySelector('.popup-form-container');

function openPopup() {
  popup.style.display = 'flex';
  popup.classList.remove('fade-out');
  popupContainer.style.display = 'block';
}
function closePopup() {
  popup.classList.add('fade-out');
  popup.addEventListener('transitionend', function handler(e) {
    if (e.propertyName === 'opacity' && popup.classList.contains('fade-out')) {
      popup.style.display = 'none';
      popupContainer.style.display = 'none';
      popup.removeEventListener('transitionend', handler);
    }
  });
}

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

const openContactBtn = document.getElementById('open-contact-btn');
if (openContactBtn) {
    openContactBtn.addEventListener('click', () => openPopup());
}

const closePopupBtn = document.getElementById('close-popup-btn');
if (closePopupBtn) {
    closePopupBtn.addEventListener('click', closePopup);
}

const budgetInput = document.querySelector('input[name="Budget"]');
if (budgetInput) {
  budgetInput.addEventListener('input', () => {
    if (budgetInput.value < 0) {
      budgetInput.value = 0;
    }
  });
}
}
//#endregion

//#region - ROADMAP
if (/roadmap/.test(window.location.pathname)) {
async function fetchCommits(username, repo) {
    const url = `https://api.github.com/repos/${username}/${repo}/commits?per_page=40&page=1`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Error loading commits');
    }

    const commits = await response.json();
    return commits;
}

function displayRoadmap(commits) {
    const list = document.getElementById('timeline-list');

    list.innerHTML = commits.map((commit, index) => `
        <li class="${index % 2 === 0 ? 'odd' : 'even'}">
            <div class="timeline-content">
              <span class="date">${new Date(commit.commit.author.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }).replace(/(\d{2}) (\w+) (\d{4})/, '$1. $2 $3.')}</span>
              <h1>${commit.commit.message.split('\n')[0]}</h1>
              <p>Autor: ${commit.commit.author.name}</p>
              <div class="github-link-container">
                <iconify-icon icon="skill-icons:github-dark" class="github-icon"></iconify-icon>
                <a href="${commit.html_url}" target="_blank" class="github-link">Pogledaj na GitHub-u</a>
              </div>
            </div>
        </li>
    `).join('');
}

// Tvoj GitHub repo
const username = 'milan-petkovski';
const repo = 'Milan-Web-Portal';

fetchCommits(username, repo)
    .then(displayRoadmap)
    .catch(err => {
        document.getElementById('timeline-list').innerHTML ='<li>Greška pri učitavanju komitova.</li>';
        console.error(err);
    });
}
//#endregion

//#region - PREVOD
document.addEventListener('DOMContentLoaded', () => {
    const langToggles = document.querySelectorAll('.langToggle');

    function showLanguage(lang) {
        document.querySelectorAll('.lang').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.' + lang).forEach(el => el.style.display = 'block');

        const isMobile = window.innerWidth <= 1024;

        langToggles.forEach(btn => {
            const icon = btn.querySelector('iconify-icon');
            const text = btn.querySelector('span');

            if (lang === 'en') {                
              icon.setAttribute('icon', 'twemoji:flag-serbia');
              text.textContent = isMobile ? 'Srpski' : 'RS';

            } else {
              icon.setAttribute('icon', 'twemoji:flag-united-kingdom');
              text.textContent = isMobile ? 'English' : 'EN';
            }
        });
    }

    let currentLang = localStorage.getItem('selectedLang');
    if (!currentLang) {
        const userLang = navigator.language || navigator.userLanguage;
        currentLang = userLang.startsWith('sr') ? 'rs' : 'en';
    }
    showLanguage(currentLang);
    localStorage.setItem('selectedLang', currentLang);

    langToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = currentLang === 'rs' ? 'en' : 'rs';
            showLanguage(currentLang);
            localStorage.setItem('selectedLang', currentLang);
        });
    });

    window.addEventListener('resize', () => {
        showLanguage(currentLang);
    });
});


//#endregion

//#region - BEFORE-AFTER
if (/projects|\/$/.test(window.location.href)) {
document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('comparison-frame');
    const toggleOld = document.getElementById('toggle-old');
    const toggleNew = document.getElementById('toggle-new');
    const toggleOldEn = document.getElementById('toggle-old-en');
    const toggleNewEn = document.getElementById('toggle-new-en');
    const allButtons = [toggleOld, toggleNew, toggleOldEn, toggleNewEn];
    const urlOld = 'https://demo-grilli.netlify.app';
    const urlNew = 'https://grilli.milanwebportal.com';

    function setActive(activeButtonId) {
        allButtons.forEach(btn => {
            if (btn) btn.classList.remove('active-toggle');
        });
        if (activeButtonId === 'old') {
            if (toggleOld) toggleOld.classList.add('active-toggle');
            if (toggleOldEn) toggleOldEn.classList.add('active-toggle');
        } else {
            if (toggleNew) toggleNew.classList.add('active-toggle');
            if (toggleNewEn) toggleNewEn.classList.add('active-toggle');
        }
    }

    function swapIframeContent(newUrl, activeButtonId) {
        if (!iframe) return;
        iframe.src = newUrl;
        setActive(activeButtonId);
    }

    if (iframe) {
        iframe.src = urlOld;
        setActive('old');
    }

    [toggleOld, toggleOldEn].forEach(btn => {
        if (btn) btn.addEventListener('click', () => {
            if (btn.classList.contains('active-toggle')) return;
            swapIframeContent(urlOld, 'old');
        });
    });

    [toggleNew, toggleNewEn].forEach(btn => {
        if (btn) btn.addEventListener('click', () => {
            if (btn.classList.contains('active-toggle')) return;
            swapIframeContent(urlNew, 'new');
        });
    });
});

}
//#endregion

//#region - GOOGLE ANALYTICS
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie");
  // Selektujemo sva dugmad sa novom klasom
  const buttons = document.querySelectorAll(".accept-cookies-btn");

  if (localStorage.getItem("cookiesAccepted") === "true") {
    banner.style.display = "none";
    loadGA();
  } else {
    banner.style.display = "flex";
  }

  // Dodajemo event listener na svako dugme
  buttons.forEach(btn => {
    btn.onclick = function() {
      localStorage.setItem("cookiesAccepted", "true");
      banner.style.display = "none";
      loadGA();
    };
  });

  function loadGA() {
    if (window.gaLoaded) return;
    const s = document.createElement("script");
    s.src = "https://www.googletagmanager.com/gtag/js?id=G-DM9Y5RBBK2";
    s.async = true;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-DM9Y5RBBK2');

    window.gaLoaded = true;
  }
});
//#endregion