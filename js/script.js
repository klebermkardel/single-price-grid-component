const themeToggle = document.getElementById("toggle");
const body = document.body;
const themeModeText = document.getElementById("theme-mode-text");

themeToggle.addEventListener("change", function() {
  if (themeToggle.checked) {
    body.classList.add("dark-mode");
    themeModeText.textContent = "Modo Claro";
  } else {
    body.classList.remove("dark-mode");
    themeModeText.textContent = "Modo Escuro";
  }
});
