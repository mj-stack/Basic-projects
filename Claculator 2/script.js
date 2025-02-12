const display = document.querySelector('.display-input');

function displayCalc(input) {
  display.value += input;
}

function clearCalc() {
  display.value = '';
}

function evalCalc() {
  display.value = eval(display.value);
}