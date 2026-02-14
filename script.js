const projects = [
  {
    title: "Home Network Control Center (Electron App)",
    description:
      "A custom-built Electron-based desktop application designed to centrally manage multiple home routers and network devices from a single interface.",
    image:
      "./images/router.jpg",
    imageAlt: "Placeholder image for the first project.",
    liveUrl: "https://home-router-prototype.html-5.me",
    sourceUrl: "https://github.com/Code-fever1/HOME-ROUTER",
  },
  {
    title: "Construction CMS – Project & Financial Management System",
    description:
      "A web-based Construction Management System (CMS) built to help project owners manage construction projects, vendors, contractors, and financial summaries in one centralized dashboard.<br>This system provides structured project tracking and financial transparency for construction workflows.",
    image:
      "./images/cms.jpg",
    imageAlt: "Placeholder image for the second project.",
    liveUrl: "https://construction-cms-prototype.html-5.me/",
    sourceUrl: "",
  },
  // {
  //   title: "Project Three",
  //   description:
  //     "working on it",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3NzA2Mjc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  //   imageAlt: "Placeholder image for the third project.",
  //   liveUrl: "",
  //   sourceUrl: "",
  // },
  // {
  //   title: "Project Four",
  //   description:
  //     "working on it",
  //   image:
  //     "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc3MDY0NjkyMnww&ixlib=rb-4.1.0&q=80&w=1080",
  //   imageAlt: "Placeholder image for the fourth project.",
  //   liveUrl: "",
  //   sourceUrl: "",
  // },
];

const skills = {
  Languages: ["HTML5", "JavaScript", "TypeScript", "Java", "Python", "PHP", "C++", "CSS3"],
  Frontend: ["React", "Next.js", "Angular", "AngularJS", "React Router", "React Native", "Electron"],
  "Backend & APIs": [
    "Node.js",
    "Express.js",
    "JWT",
    "Nodemon",
    "Firebase",
    "MongoDB",
    "MySQL",
    "Apache",
    "APIs (REST/HTTP)",
  ],
  "Cloud & Systems": ["AWS", "Azure", "Cloudflare", "Ubuntu", "Windows Terminal"],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Postman",
    "Cursor",
    "Windsurf",
    "AI Studio",
    "Antigravity",
    "AnyDesk",
    "Arduino",
    "Tor",
    "EA",
    "PSN",
  ],
  "Design & Creative": ["Figma", "Canva", "Adobe Lightroom"],
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Code-fever1", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/syed-ali-jah-520770334/", icon: "linkedin" },
  { label: "Email", href: "mailto:alijahinnovates@gmail.com", icon: "email" },
];

const THEME_KEY = "portfolio-theme";
const SOCIAL_ICONS = {
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.206 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.016-2.04-3.338.725-4.043-1.61-4.043-1.61-.545-1.385-1.333-1.754-1.333-1.754-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.135-.303-.54-1.523.104-3.175 0 0 1.006-.322 3.301 1.23A11.47 11.47 0 0112 6.844c1.02.005 2.04.138 3 .404 2.28-1.552 3.286-1.23 3.286-1.23.644 1.652.239 2.872.12 3.175.765.84 1.229 1.91 1.229 3.22 0 4.61-2.804 5.625-5.474 5.92.434.375.81 1.103.81 2.223 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.566 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM7.119 20.452H3.553V9h3.566v11.452zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM20.447 20.452H16.89v-5.569c0-1.328-.028-3.037-1.853-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.346V9h3.414v1.561h.047c.476-.9 1.636-1.85 3.37-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286z"/></svg>',
  email:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-6.99V6H4zm0 3.236V18h16V9.236l-7.38 5.144a2 2 0 0 1-2.24 0L4 9.236z"/></svg>',
  x:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.901 1.154h3.68l-8.04 9.188L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.49h2.039L6.486 3.24H4.298l13.313 17.404z"/></svg>',
};

const SKILL_ICON_MAP = {
  HTML5: { className: "devicon-html5-plain", label: "HTML5" },
  CSS3: { className: "devicon-css3-plain", label: "CSS3" },
  JavaScript: { className: "devicon-javascript-plain", label: "JavaScript" },
  TypeScript: { className: "devicon-typescript-plain", label: "TypeScript" },
  React: { className: "devicon-react-original", label: "React" },
  "Next.js": { className: "devicon-nextjs-original", label: "Next.js" },
  Angular: { className: "devicon-angularjs-plain", label: "Angular" },
  AngularJS: { className: "devicon-angularjs-plain", label: "AngularJS" },
  "React Router": { className: "devicon-react-original", label: "React Router" },
  "React Native": { className: "devicon-react-original", label: "React Native" },
  Electron: { className: "devicon-electron-original", label: "Electron" },
  "Node.js": { className: "devicon-nodejs-plain", label: "Node.js" },
  "Express.js": { className: "devicon-express-original", label: "Express" },
  Firebase: { className: "devicon-firebase-plain", label: "Firebase" },
  MongoDB: { className: "devicon-mongodb-plain", label: "MongoDB" },
  MySQL: { className: "devicon-mysql-plain", label: "MySQL" },
  Apache: { className: "devicon-apache-plain", label: "Apache" },
  AWS: { className: "devicon-amazonwebservices-plain-wordmark", label: "AWS" },
  Azure: { className: "devicon-azure-plain", label: "Azure" },
  Cloudflare: { className: "devicon-cloudflare-plain", label: "Cloudflare" },
  Ubuntu: { className: "devicon-ubuntu-plain", label: "Ubuntu" },
  Python: { className: "devicon-python-plain", label: "Python" },
  Java: { className: "devicon-java-plain", label: "Java" },
  PHP: { className: "devicon-php-plain", label: "PHP" },
  "C++": { className: "devicon-cplusplus-plain", label: "C++" },
  Git: { className: "devicon-git-plain", label: "Git" },
  GitHub: { className: "devicon-github-original", label: "GitHub" },
  Postman: { className: "devicon-postman-plain", label: "Postman" },
  Figma: { className: "devicon-figma-plain", label: "Figma" },
  Canva: { className: "devicon-canva-original", label: "Canva" },

  // Closest matches for tools without exact Devicon logos
  JWT: { className: "devicon-nodejs-plain", label: "JWT" },
  Nodemon: { className: "devicon-nodejs-plain", label: "Nodemon" },
  "APIs (REST/HTTP)": { className: "devicon-postman-plain", label: "APIs (REST/HTTP)" },
  Cursor: { className: "devicon-vscode-plain", label: "Cursor" },
  Windsurf: { className: "devicon-vscode-plain", label: "Windsurf" },
  "AI Studio": { className: "devicon-python-plain", label: "AI Studio" },
  Antigravity: { className: "devicon-python-plain", label: "Antigravity" },
  AnyDesk: { className: "devicon-windows8-original", label: "AnyDesk" },
  Arduino: { className: "devicon-arduino-plain", label: "Arduino" },
  Tor: { className: "devicon-firefox-plain", label: "Tor" },
  EA: { className: "devicon-google-plain", label: "EA" },
  PSN: { className: "devicon-google-plain", label: "PSN" },
  "Windows Terminal": { className: "devicon-bash-plain", label: "Windows Terminal" },
  "Adobe Lightroom": { className: "devicon-photoshop-plain", label: "Adobe Lightroom" },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderSkillBadge(skillName) {
  const entry = SKILL_ICON_MAP[skillName];
  const label = entry?.label ?? skillName;
  const iconClass = entry?.className;
  const safeLabel = escapeHtml(label);
  const safeTitle = escapeHtml(skillName);

  if (!iconClass) {
    return `<span class="badge" title="${safeTitle}"><span class="badge-label">${safeLabel}</span></span>`;
  }

  return `<span class="badge" title="${safeTitle}"><i class="badge-icon ${iconClass}" aria-hidden="true"></i><span class="badge-label">${safeLabel}</span></span>`;
}

function getSocialIcon(iconName) {
  return SOCIAL_ICONS[iconName] || "";
}

function readSavedTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    // Ignore storage failures in restricted browsing modes.
  }
}

function getInitialTheme() {
  const saved = readSavedTheme();
  if (saved) return saved;
  if (!window.matchMedia) return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  saveTheme(theme);

  const button = document.getElementById("themeToggle");
  if (!button) return;
  const isDark = theme === "dark";
  const icon = isDark ? "🌙" : "☀";
  const label = isDark ? "Dark" : "Light";

  button.innerHTML = `<span class="theme-icon" aria-hidden="true">${icon}</span><span class="theme-label">${label}</span>`;
  button.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  button.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
}

function setupThemeToggle() {
  const button = document.getElementById("themeToggle");
  applyTheme(getInitialTheme());
  if (!button) return;

  button.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

function showPrivateMessage(event) {
  event.stopPropagation();

  // Create modal element
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
  `;

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    max-width: 400px;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    animation: slideUp 0.3s ease;
    position: relative;
  `;

  modalContent.innerHTML = `
    <div style="font-size: 3rem; margin-bottom: 1rem;">🔒</div>
    <h3 style="color: #333; margin-bottom: 1rem; font-size: 1.5rem;">Private Project</h3>
    <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.6;">
      This site is private source code cannot be shared or still in development unable to see
    </p>
    <button onclick="this.closest('.modal').remove()" style="
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 2rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      transition: transform 0.2s ease;
    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      Got it! 🌟
    </button>
  `;

  // Add modal class for easy removal
  modal.className = 'modal';
  modal.appendChild(modalContent);

  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  // Add modal to body
  document.body.appendChild(modal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Close on Escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (project) => {
        const hasLiveUrl = project.liveUrl && project.liveUrl.trim() !== "";
        const hasSourceUrl = project.sourceUrl && project.sourceUrl.trim() !== "";
        const clickAction = hasLiveUrl ? `onclick="window.open('${project.liveUrl}', '_blank')"` : "";
        const cursorStyle = hasLiveUrl ? "cursor: pointer;" : "cursor: not-allowed;";

        return `
        <article class="project-card" ${clickAction} style="${cursorStyle}">
          <img src="${project.image}" alt="${project.imageAlt}" loading="lazy">
          <div class="project-body">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-actions">
              ${hasLiveUrl ?
            `<a class="btn btn-primary btn-soft" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">Live Demo</a>` :
            `<button class="btn btn-primary btn-soft" onclick="showPrivateMessage(event)" style="cursor: not-allowed; opacity: 0.7;">Live Demo</button>`
          }
              ${hasSourceUrl ?
            `<a class="btn btn-primary btn-soft" href="${project.sourceUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">Source</a>` :
            `<button class="btn btn-primary btn-soft" onclick="showPrivateMessage(event)" style="cursor: not-allowed; opacity: 0.7;">Source</button>`
          }
            </div>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = Object.entries(skills)
    .map(
      ([category, items]) => `
      <article class="skill-card">
        <h3>${category}</h3>
        <div class="badge-wrap">
          ${items.map((item) => renderSkillBadge(item)).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

function renderSocial() {
  const social = document.getElementById("socialLinks");
  if (!social) return;

  social.innerHTML = socialLinks
    .map(
      (item) => `
      <a class="icon-link" href="${item.href}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
        ${getSocialIcon(item.icon)}
      </a>
    `
    )
    .join("");
}

function setupMenu() {
  const button = document.getElementById("menuButton");
  const mobileNav = document.getElementById("mobileNav");
  if (!button || !mobileNav) return;

  button.addEventListener("click", () => {
    const isOpen = mobileNav.hasAttribute("hidden");
    if (isOpen) {
      mobileNav.removeAttribute("hidden");
      button.setAttribute("aria-expanded", "true");
    } else {
      mobileNav.setAttribute("hidden", "");
      button.setAttribute("aria-expanded", "false");
    }
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.setAttribute("hidden", "");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

function smoothScrollToElement(hash) {
  try {
    const target = document.querySelector(hash);
    if (!target) return;

    const header = document.querySelector(".site-header");
    const headerHeight = header ? header.offsetHeight : 0;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  } catch (error) {
    // Ignore invalid selectors
  }
}

function setupNavHighlight() {
  const links = Array.from(
    document.querySelectorAll(".desktop-nav a[href^='#'], .mobile-nav a[href^='#']")
  );
  if (!links.length) return;

  const sections = new Map();

  links.forEach((link) => {
    const hash = link.getAttribute("href");
    if (!hash) return;
    try {
      const section = document.querySelector(hash);
      if (section) {
        sections.set(hash, section);
      }
    } catch (error) {
      // Ignore invalid selectors
    }

    link.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveLink(hash);
      smoothScrollToElement(hash);
    });
  });

  if (!sections.size) return;

  const sectionEntries = Array.from(sections.entries()).map(([hash, section]) => ({
    hash,
    section,
  }));

  function setActiveLink(targetHash) {
    links.forEach((link) => {
      const linkHash = link.getAttribute("href");
      if (linkHash === targetHash) {
        link.classList.add("nav-link-active");
      } else {
        link.classList.remove("nav-link-active");
      }
    });
  }

  function updateActiveOnScroll() {
    // Use a top-based position (with a small offset for the sticky header)
    // so the section that is actually in view appears active, which feels
    // more natural on mobile.
    const scrollPosition = window.scrollY + 120; // header + breathing room

    let currentHash = null;

    sectionEntries.forEach(({ hash, section }, index) => {
      const rect = section.getBoundingClientRect();
      const top = window.scrollY + rect.top;
      const bottom = top + rect.height;

      if (scrollPosition >= top && scrollPosition < bottom) {
        currentHash = hash;
      }
    });

    const doc = document.documentElement;
    const scrollBottom = window.scrollY + window.innerHeight;
    const docHeight = doc.scrollHeight;

    // If no section matched OR we are effectively at the bottom of the page,
    // force the last section (e.g. #contact) to be active so the Contact nav
    // item highlights when the user reaches the end.
    if (sectionEntries.length && (!currentHash || scrollBottom >= docHeight - 4)) {
      currentHash = sectionEntries[sectionEntries.length - 1].hash;
    }

    if (currentHash) {
      setActiveLink(currentHash);
    }
  }

  updateActiveOnScroll();
  window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
}

function setYear() {
  const year = document.getElementById("year");
  if (!year) return;
  year.textContent = String(new Date().getFullYear());
}

function setupHeroImageInteractions() {
  const hero = document.querySelector(".hero-image");
  if (!hero || !(hero instanceof HTMLImageElement)) return;

  const originalSrc = hero.getAttribute("src");
  const altSrc = hero.getAttribute("data-alt-src") || "IMG2.jpg";

  if (!originalSrc || !altSrc || originalSrc === altSrc) return;

  const activate = () => {
    hero.src = altSrc;
  };

  const deactivate = () => {
    hero.src = originalSrc;
  };

  hero.addEventListener("mouseenter", activate);
  hero.addEventListener("mouseleave", deactivate);
  hero.addEventListener("mousedown", activate);
  hero.addEventListener("mouseup", deactivate);
  hero.addEventListener("touchstart", activate, { passive: true });
  hero.addEventListener("touchend", deactivate);
  hero.addEventListener("touchcancel", deactivate);
}

function setupParallaxAvatar() {
  const heroImage = document.querySelector(".hero-image");
  const siteHeader = document.querySelector(".site-header");
  const heroImageWrap = document.querySelector(".content-wrapper .hero-image-wrap");
  const brand = document.querySelector(".site-header .brand");

  if (!heroImage || !siteHeader || !heroImageWrap || !brand) return;

  /* ── Tunables ─────────────────────────────────────────── */
  const AVATAR_SIZE = 40;     // final avatar size in px when docked
  const STOP_GAP = 8;      // px gap above navbar bottom for final Y
  /* ────────────────────────────────────────────────────── */

  // Move image to body so position:fixed works (avoids backdrop-filter context)
  if (heroImage.parentElement !== document.body) {
    document.body.appendChild(heroImage);
  }

  // Measurements (document-relative)
  let originX, originY, originSize;

  function measureOrigin() {
    const rect = heroImageWrap.getBoundingClientRect();
    originX = rect.left + rect.width / 2 + window.scrollX;
    originY = rect.top + rect.height / 2 + window.scrollY;
    originSize = heroImage.offsetWidth || rect.width;
  }

  measureOrigin();

  // How far the user must scroll for the full animation to complete
  // (from hero origin down to where image would be at navbar level)
  function getScrollRange() {
    const headerH = siteHeader.offsetHeight;
    // The image needs to travel from its document-Y origin to the navbar centre
    const targetDocY = headerH / 2;
    return Math.max(originY - targetDocY - 60, 1); // 60 = main padding-top
  }

  let ticking = false;

  function update() {
    const scrollY = window.scrollY;
    const headerH = siteHeader.offsetHeight;
    const scrollRange = getScrollRange();

    // Progress: 0 = no scroll, 1 = fully docked at brand
    const progress = Math.min(Math.max(scrollY / scrollRange, 0), 1);

    // ── Target: centre of the brand area in viewport coords ──
    const brandRect = brand.getBoundingClientRect();
    const targetVX = brandRect.left + 20;           // just left of brand text
    const targetVY = brandRect.top + brandRect.height / 2;

    // ── Origin in viewport coords ──
    const originVX = originX - scrollY * 0;  // stays at its layout X (no horizontal parallax at 0)
    const originVY = originY - scrollY;       // natural scroll position

    // ── Interpolate position ──
    const viewX = originVX + (targetVX - originVX) * easeOutCubic(progress);
    // For Y: use the origin viewport position when progress is 0,
    // smoothly move to targetVY when progress is 1
    const viewY = originVY + (targetVY - originVY) * easeOutCubic(progress);

    // ── Interpolate size ──
    const currentSize = originSize + (AVATAR_SIZE - originSize) * easeOutCubic(progress);

    // ── Apply ──
    heroImage.style.left = viewX + 'px';
    heroImage.style.top = viewY + 'px';
    heroImage.style.width = currentSize + 'px';
    heroImage.style.height = currentSize + 'px';
    heroImage.style.transform = 'translate(-50%, -50%)';

    ticking = false;
  }

  // Smooth easing function
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Re-measure on resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      measureOrigin();
      update();
    }, 100);
  });

  // First paint
  update();
}

function initializeApp() {
  renderProjects();
  renderSkills();
  renderSocial();
  setupThemeToggle();
  setupMenu();
  setupNavHighlight();
  setYear();
  setupHeroImageInteractions();
  setupParallaxAvatar();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
