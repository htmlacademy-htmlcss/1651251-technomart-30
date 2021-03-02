const perfarator = document.querySelector(".perfarators-bg");
const drill = document.querySelector(".drills-bg");
const nextBtn = document.querySelector(".button-right-fill");
const prevBtn = document.querySelector(".button-left-fill");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderNavItems = document.querySelectorAll(".slider-navigation-item");
const sliderRight = document.querySelector(".button-right");
const sliderLeft = document.querySelector(".button-left");

let i = 0;

const showSlide = (currentSlide) => {

  sliderNavItems.forEach((dot, index) => {
    if ((index === currentSlide)) {
      dot.classList.add("active-slide");
      return;
    }

    dot.classList.remove("active-slide");
  });

  sliderItems.forEach((slide, index) => {
    if (index === currentSlide) {
    slide.style.display = "block";
    return;
    }
    slide.style.display = "none";
  });

};

sliderRight.addEventListener("click", (evt) => {
  i++;
  if (i === sliderNavItems.length) {
    i = 0;
  }
  showSlide(i);
});

sliderLeft.addEventListener("click", (evt) => {
  if (i === 0) {
    i = sliderNavItems.length;
  }
  i--;
  showSlide(i);
});

showSlide(0);
