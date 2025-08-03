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
