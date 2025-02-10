function rollDice() {

  const diceRolls = document.getElementById("numberInput");
  const totalRolls = [];
  const diceImages = [];

  document.querySelector('.diceCounts').textContent = ``
  
  for (let i = 0; i < diceRolls.value; i++) {
    let diceRoll = (Math.floor(Math.random() * 6) + 1)
    totalRolls.push(diceRoll);
    diceImages.push(`<img class="diceFace" src='Dice images/${diceRoll}.svg' />`)
  }

  document.querySelector('.diceCounts').textContent = `Dice: ${totalRolls.join(', ')}`
  document.querySelector('.diceImages').innerHTML = `${diceImages.join('')}`
}

document.querySelector('.rollButton').addEventListener('click', rollDice);