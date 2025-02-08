let count = 0;
let displayCountElem = document.getElementById('display-count');

document.querySelector('.decrease-count').addEventListener('click', () => {
  count--;
  displayCountElem.textContent = count;
})

document.querySelector('.reset-count').addEventListener('click', () => {
  count = 0;
  displayCountElem.textContent = count;
})

document.querySelector('.increase-count').addEventListener('click', () => {
  count++;
  displayCountElem.textContent = count;
})