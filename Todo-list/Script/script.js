const todoArray = [];

const inputElement = document.querySelector('.js-todo-input');

// function updateHTML() {

// }

document.querySelectorAll('.js-add-todo').forEach((button, index) => {
  button.addEventListener('click', () => {
    todoArray.push(inputElement.value);
    addTodo();
  })
})

function addTodo() {

  const html = 
  `
    <div class="todo-task">
      <div class="todo-task-name-div">
        <p class="todo-task-name">${inputElement.value}</p>
      </div>
      <div class="todo-done-button-div">
        <button class="todo-done-button js-done-button">Done</button>
      </div>
    </div> 
  `
  document.querySelector('.js-todo-grid').innerHTML += html;
  inputElement.value = '';

  deleteTodo();
}  

function deleteTodo() {
  document.querySelectorAll('.js-done-button').forEach((button, index) => {
    button.addEventListener('click', () => {
      todoArray.splice(index, 1);
      deleteTodo();
      button.closest('.todo-task').remove();
    })
  });
}