// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Dark Mode Toggle
const btn = document.getElementById("theme-toggle");
const sun = btn.querySelector(".sun");
const moon = btn.querySelector(".moon");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  sun.classList.toggle("visible");
  moon.classList.toggle("visible");
}

btn.addEventListener("click", toggleDarkMode);


// Show/Hide Skills
function toggleSkills() {
  const skills = document.getElementById('skills-list');
  if (skills.style.display === 'none') {
    skills.style.display = 'block';
  } else {
    skills.style.display = 'none';
  }
}

// Scroll to Top Button Logic
const topBtn = document.getElementById('topBtn');
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Highlight clicked project card
function highlightCard(card) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(c => c.classList.remove('highlight'));
  card.classList.add('highlight');
}

// Typing animation
const text = "Hai,Im JERALD";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    document.getElementById("typing-text").textContent = text;
  }
}
document.getElementById("typing-text").textContent = "";
typeWriter();