const choices = document.querySelector(".erosion-choices");
const screen = document.getElementById("erosion-screen");
choices.addEventListener("click", event => {
  const selected = event.target.closest("button");
  if (!selected) return;
  for (const button of choices.querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(button === selected));
  }
  screen.src = selected.dataset.image;
  screen.alt = selected.dataset.alt;
});
