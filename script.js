// THEME TOGGLE
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  toggleBtn.textContent =
    document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// ANIMATE SKILLS ON SCROLL
const skills = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;

  skills.forEach((skill) => {
    const top = skill.getBoundingClientRect().top;

    if (top < trigger) {
      skill.style.width = skill.classList.contains("html") ? "90%" :
                          skill.classList.contains("js") ? "85%" :
                          skill.classList.contains("react") ? "80%" :
                          skill.classList.contains("python") ? "75%" :
                          "70%";
    }
  });
});