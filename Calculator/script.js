function calculate(number) {
  
}

document.querySelectorAll('.calculator-button').forEach((num) => {
  num.addEventListener('click', () => {
    // document.querySelector('.js-display-calculation').innerHTML = ``
    let numForCalc = num.innerText;
    document.querySelector('.js-display-calculation').innerHTML += `${numForCalc}`
  })
});

document.querySelector('.eval-calculation').addEventListener('click', () => {
  calcToSolve = document.querySelector('.js-display-calculation').innerHTML;
  let result = eval(calcToSolve);
  document.querySelector('.js-display-calculation').innerHTML = `${result}`;
})

document.querySelector('.all-clear').addEventListener('click', () => {
    document.querySelector('.js-display-calculation').innerHTML = ``;
})