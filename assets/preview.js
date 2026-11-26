const choices = document.querySelector(".erosion-choices");
const screen = document.getElementById("erosion-screen");
const exhibit = document.getElementById("erosion-exhibit");
function showExhibit() {
  const option = exhibit.selectedOptions[0];
  screen.src = option.value;
  screen.alt = option.dataset.alt;
}
exhibit.addEventListener("change", showExhibit);
choices.addEventListener("click", event => {
  const selected = event.target.closest("button");
  if (!selected) return;
  for (const button of choices.querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(button === selected));
  }
  const isGallery = selected === choices.querySelector("button");
  exhibit.parentElement.hidden = !isGallery;
  if (isGallery) {
    showExhibit();
  } else {
    screen.src = selected.dataset.image;
    screen.alt = selected.dataset.alt;
  }
});
