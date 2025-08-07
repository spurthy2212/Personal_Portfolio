// Toggle Dark/Light Mode
document.getElementById("modeToggle").addEventListener("click", function () {
  document.body.classList.toggle("light");
  this.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});
