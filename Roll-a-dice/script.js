let diceFace;

function rollDice() {
  let randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber <= 1/6) {
    diceFace = 'one';
  } else if (randomNumber > 1/6 && randomNumber <= 2/6) {
    diceFace = 'two';
  } else if (randomNumber > 2/6 && randomNumber <= 3/6) {
    diceFace = 'three';
  } else if (randomNumber > 3/6 && randomNumber <= 4/6) {
    diceFace = 'four';
  } else if (randomNumber > 4/6 && randomNumber <= 5/6) {
    diceFace = 'five';
  } else if (randomNumber > 5/6 && randomNumber <= 1) {
    diceFace = 'six';
  }

  let html = 
  `
    <img class="game-img" src="Images/dice-six-faces-${diceFace}.svg" alt="">
  `;

  document.querySelector('.js-dice-face').innerHTML = html;

  let count = 1;

  countIncrementer();
  
  let historyHTML = 
  `
  <div class="roll-attempt">
    <div class="roll-attempt-img-div">
      <img src="Images/dice-six-faces-${diceFace}.svg" alt="">
    </div>
    <div class="roll-attempt-text">
      <span>You got ${diceFace}</span>
    </div>
  </div>
  `
  
  document.querySelector('.game-history-details').innerHTML += historyHTML;
}
    
    document.querySelector('.js-roll-dice').addEventListener('click', rollDice);
    document.querySelector('.js-roll-dice').addEventListener('click', countIncrementer);

function countIncrementer() {
  let count;
  count++;
}
