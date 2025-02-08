let age;

document.querySelector('.my-button').addEventListener('click', () => {
  let inputElem = document.querySelector('.ageInput');
  age = inputElem.value;
  
  if (age < 18) {
    document.querySelector('.display-text').innerHTML = `You cannot drive`;
  } else {
    document.querySelector('.display-text').innerHTML = `You can drive`;
  }
})