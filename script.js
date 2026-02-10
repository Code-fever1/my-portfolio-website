const projects = [
  {
    title: "Project One",
    description:
      "A brief description of project one, highlighting the technologies used and its purpose. This project solves a real-world problem by doing XYZ.",
    image:
      "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzcwNzE3MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "Placeholder image for the first project.",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "A brief description of project two, highlighting the technologies used and its purpose. This project showcases advanced frontend techniques.",
    image:
      "https://images.unsplash.com/photo-1543071293-d91175a68672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzcwNzAzNTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "Placeholder image for the second project.",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "A brief description of project three, highlighting the technologies used and its purpose. A full-stack application with a custom API.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3NzA2Mjc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "Placeholder image for the third project.",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Project Four",
    description:
      "A brief description of project four, highlighting the technologies used and its purpose. Focuses on performance and accessibility.",
    image:
      "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc3MDY0NjkyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    imageAlt: "Placeholder image for the fourth project.",
    liveUrl: "#",
    sourceUrl: "#",
  },
];

const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Redux", "Vite"],
  Backend: ["Node.js", "Express", "Firebase", "PostgreSQL", "REST APIs"],
  "Tools & Platforms": ["Git", "GitHub", "Docker", "Vercel", "Jira"],
};

const socialLinks = [
  { label: "GitHub", href: "#", icon: "github" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "X (Twitter)", href: "#", icon: "x" },
];

const THEME_KEY = "portfolio-theme";
const SOCIAL_ICONS = {
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.206 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.016-2.04-3.338.725-4.043-1.61-4.043-1.61-.545-1.385-1.333-1.754-1.333-1.754-1.09-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.107-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.135-.303-.54-1.523.104-3.175 0 0 1.006-.322 3.301 1.23A11.47 11.47 0 0112 6.844c1.02.005 2.04.138 3 .404 2.28-1.552 3.286-1.23 3.286-1.23.644 1.652.239 2.872.12 3.175.765.84 1.229 1.91 1.229 3.22 0 4.61-2.804 5.625-5.474 5.92.434.375.81 1.103.81 2.223 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.566 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM7.119 20.452H3.553V9h3.566v11.452zM5.337 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM20.447 20.452H16.89v-5.569c0-1.328-.028-3.037-1.853-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.346V9h3.414v1.561h.047c.476-.9 1.636-1.85 3.37-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286z"/></svg>',
  x:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.901 1.154h3.68l-8.04 9.188L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.49h2.039L6.486 3.24H4.298l13.313 17.404z"/></svg>',
};

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

  button.textContent = theme === "dark" ? "Dark" : "Light";
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

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <img src="${project.image}" alt="${project.imageAlt}" loading="lazy">
        <div class="project-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-actions">
            <a class="btn btn-outline" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a class="btn btn-primary" href="${project.sourceUrl}" target="_blank" rel="noopener noreferrer">Source</a>
          </div>
        </div>
      </article>
    `
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
          ${items.map((item) => `<span class="badge">${item}</span>`).join("")}
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

function setYear() {
  const year = document.getElementById("year");
  if (!year) return;
  year.textContent = String(new Date().getFullYear());
}

function initializeApp() {
  renderProjects();
  renderSkills();
  renderSocial();
  setupThemeToggle();
  setupMenu();
  setYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
