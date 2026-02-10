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
  { label: "GitHub", href: "#", icon: "GH" },
  { label: "LinkedIn", href: "#", icon: "IN" },
  { label: "Twitter", href: "#", icon: "X" },
];

const THEME_KEY = "portfolio-theme";

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
        <span>${item.icon}</span>
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
