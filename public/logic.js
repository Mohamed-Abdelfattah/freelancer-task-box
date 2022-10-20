console.clear();

const elSlider = document.getElementById('slider');
const elSliderInput = document.querySelector('.slider__input');
const elSliderValue = document.querySelector('.slider__value');

elSliderInput.oninput = updateValue;
updateValue();

function updateValue() {
  elSliderValue.textContent = `${elSliderInput.value}%`;
}
