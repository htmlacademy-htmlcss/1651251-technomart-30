const perfarator = document.querySelector(".perfarators-bg");
const drill = document.querySelector(".drills-bg");
const next_btn = document.querySelector(".button-right-fill");
const prev_btn = document.querySelector(".button-left-fill");

const prevSlide = () => {
  prev_btn.style.fill = "#4d4d4d";
  next_btn.style.fill = "var(--white)";
  drill.style.display = "none";
  perfarator.style.display = "block";
}

const nextSlide = () => {
  next_btn.style.fill = "#4d4d4d";
  prev_btn.style.fill = "var(--white)";
  perfarator.style.display = "none";
  drill.style.display = "block";
}

const tickSlide = () => {
  nextSlide();
  setTimeout(() => {
    prevSlide();
  }, 5000);
}

setInterval(() => {
  tickSlide();
}, 10000);
