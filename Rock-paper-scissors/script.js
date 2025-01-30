let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();

function playGame(playerMove) {
  let randomNumber = Math.random();
  let computerMove;

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3 ) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove == 'rock') {
      result = 'Tie.'
    } else if (computerMove === 'paper') {
      result = 'You Lose.'
    } else if (computerMove === 'scissors') {
      result = 'You Win.'
    }
  } else if (playerMove === 'paper') {
    if (computerMove == 'rock') {
      result = 'You Win.'
    } else if (computerMove === 'paper') {
      result = 'Tie.'
    } else if (computerMove === 'scissors') {
      result = 'You Lose.'
    }
  } else if (playerMove === 'scissors') {
    if (computerMove == 'rock') {
      result = 'You Lose.'
    } else if (computerMove === 'paper') {
      result = 'You Win.'
    } else if (computerMove === 'scissors') {
      result = 'Tie.'
    }
  }

  const inputElemet = document.querySelector('.game-play');
  inputElemet.innerHTML = `
    <p>
      You <img src="${playerMove}.png" alt="">
      <img src="${computerMove}.png" alt=""> Computer
    </p>
    <p>
      ${result}
    </p>
  `

  if (result === 'You Win.') {
    score.wins++;
  } else if (result === 'You Lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();
}

function updateScore() {
  const scoreElemet = document.querySelector('.score-data');
    scoreElemet.innerHTML = `
    <div class="score-data-info">
    <div class="score-data-name">
          <div>Wins</div>
          <div>Losses</div>
          <div style="border-bottom: 1px solid black;">Ties</div>
          <div>Total Games</div>
        </div>
        <div class="score-data-number">
          <div>${score.wins}</div>
          <div>${score.losses}</div>
          <div style="border-bottom: 1px solid black;">${score.ties}</div>
          <div>${score.wins + score.losses + score.ties}</div>
        </div>
      </div>
      <div class="score-reset">
        <button class="reset-button">Reset score</button>
      </div> 
    `
    document.querySelector('.score-reset').addEventListener('click', resetScore);
}


function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();

  document.querySelector('.game-play').innerHTML = `&#8593;Play game&#8593;`
}