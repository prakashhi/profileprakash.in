const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 1500;
const typewriterEl = document.getElementById("typewriter");

function typeEffect() {
  const current = roles[roleIndex];
  if (isDeleting) {
    charIndex--;
    typewriterEl.textContent = current.substring(0, charIndex);
  } else {
    charIndex++;
    typewriterEl.textContent = current.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => {
      isDeleting = true;
      typeEffect();
    }, delayBetweenWords);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

window.addEventListener("DOMContentLoaded", () => {
  // Page fade-in
  document
    .getElementById("mainContent")
    .classList.remove("opacity-0", "translate-y-10");
  // Start typewriter
  typeEffect();
});

function ShowList() {
  const List = document.getElementById("NavList").classList;
  const Ham = document.getElementById("Ham").classList;
  const Close = document.getElementById("close").classList;

  // Only apply on mobile
  if (window.innerWidth <= 600) {
    List.remove("max-[600px]:hidden");
    List.add("max-[600px]:block");

    Ham.add("max-[600px]:hidden");
    Ham.remove("max-[600px]:block");

    Close.remove("max-[600px]:hidden");
    Close.add("max-[600px]:block");
  }
}

function Closebtn() {
  const List = document.getElementById("NavList").classList;
  const Ham = document.getElementById("Ham").classList;
  const Close = document.getElementById("close").classList;

  if (window.innerWidth <= 600) {
    List.add("max-[600px]:hidden");
    List.remove("max-[600px]:block");

    Ham.remove("max-[600px]:hidden");
    Ham.add("max-[600px]:block");

    Close.add("max-[600px]:hidden");
    Close.remove("max-[600px]:block");
  }
}

const skillData = [
  {
    name: "JavaScript",
    img: "./images/SVG_LANGUAGE/js_5968292.png",
    width: "15",
  },
  { name: "React", img: "./images/SVG_LANGUAGE/React.png", width: "15" },
  {
    name: "Tailwind CSS",
    img: "./images/SVG_LANGUAGE/tailwind.svg",
    width: "15",
  },
  { name: "MUI", img: "./images/SVG_LANGUAGE/material.svg", width: "15" },
  { name: "Git", img: "./images/SVG_LANGUAGE/social.png", width: "15" },
  { name: "GitHub", img: "./images/SVG_LANGUAGE/github.png", width: "15" },
  { name: "Node.js", img: "./images/SVG_LANGUAGE/node-js.svg", width: "20" },
  { name: "PHP", img: "./images/SVG_LANGUAGE/php.png", width: "15" },
  { name: "MySQL", img: "./images/SVG_LANGUAGE/mysql.svg", width: "15" },
  { name: "MongoDB", img: "./images/SVG_LANGUAGE/mongodb.svg", width: "15" },
];

const skill = document.getElementById("SkillLan");

skillData.forEach((iteam, index) => {
  const card = document.createElement("div");
  card.classList.add(
    "px-4",
    "py-1",
    "bg-gray-100",
    "text-gray-700",
    "text-sm",
    "rounded-full",
    "flex",
    "flex-row",
    "items-center",
    "gap-2"
  );

  card.innerHTML = `<img
  key="${index}"
    class="rounded-sm"
    src="${iteam.img}"
    width="${iteam.width}"
    alt=""
    />
    <span>${iteam.name}</span>`;

  skill.appendChild(card);
});

 