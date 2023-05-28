const firstSlide = document.querySelector(".first");
const secondSlide = document.querySelector(".second");
const thirdSlide = document.querySelector(".third");
const slider = document.querySelector(".slider");
const indicators = document.querySelectorAll(".indicator");

function sliderFirst() {
  let setWidth = slider.offsetWidth;
  firstSlide.style.transform = `translate(${setWidth}px)`;
  secondSlide.style.transform = `translate(${setWidth * -2}px)`;
  thirdSlide.style.transform = `translate(${setWidth}px)`;
  firstSlide.style.transition = "2s";
  secondSlide.style.transition = "0s";
  thirdSlide.style.transition = "2s";
}

function sliderSecond() {
  let setWidth = slider.offsetWidth;
  firstSlide.style.transform = `translate(${setWidth * -1}px)`;
  secondSlide.style.transform = `translate(${setWidth * -1}px)`;
  thirdSlide.style.transform = `translate(${setWidth * 2}px)`;
  firstSlide.style.transition = "0s";
  secondSlide.style.transition = "2s";
  thirdSlide.style.transition = "2s";
}

function sliderThird() {
  let setWidth = slider.offsetWidth;
  thirdSlide.style.transform = "translate(000px)";
  thirdSlide.style.transition = "0s";
  firstSlide.style.transform = "translate(000px)";
  secondSlide.style.transform = "translate(000px)";
  firstSlide.style.transition = "2s";
  secondSlide.style.transition = "2s";
}

let forTimer = 0;

function showSlider() {
  if (forTimer === 0) {
    sliderFirst();
    showIndicator(0);
  } else if (forTimer === 1) {
    sliderSecond();
    showIndicator(1);
  } else if (forTimer === 2) {
    sliderThird();
    showIndicator(2);
    return (forTimer = 0);
  }
  forTimer++;
}

//setInterval(showSlider, 6000);

/**
 * Description shows which page of the slider is active
 *
 * @param {number} iteration
 *
 */
function showIndicator(ind) {
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("indicator-select");
    if (ind === i) {
      indicators[i].classList.add("indicator-select");
    }
  }
}
