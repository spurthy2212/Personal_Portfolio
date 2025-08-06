// Toggle Dark/Light Mode
const modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  modeBtn.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});
