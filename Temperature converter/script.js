const numberInput = document.getElementById("numberInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.querySelector(".display-result");
let temp;

function convertTemp() {
  if (toFahrenheit.checked) {
    temp = Number(numberInput.value);
    temp = ((temp * 9/5) + 32).toFixed(1);
    result.innerHTML = `${temp}&deg;F`;
  } else if (toCelcius.checked) {
    temp = Number(numberInput.value);
    temp = ((temp - 32) * 5/9).toFixed(1);
    result.innerHTML = `${temp}&deg;C`;
  }
}

document.querySelector('.submit-button').addEventListener('click', convertTemp);