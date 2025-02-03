function flipcoin() {
  const randomNumber = Math.random();
  let result;
  if (randomNumber >= 0 && randomNumber < 1/2) {
    result = 'heads';
  } else if (randomNumber >= 1/2 && randomNumber < 1) {
    result = 'tails';
  }

  let html =
  `
    <img src="coin-${result}.png" alt="">
    <span>${result}</span>
  `

  document.querySelector('.js-show-coinside').innerHTML = html;
}

document.querySelector('.toss-button').addEventListener('click', flipcoin);