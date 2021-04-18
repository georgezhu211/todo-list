export default class Todo {
  constructor(title, complete=false) {
    this.title = title
    this.complete = complete;
  }
}

const todoDOM = (() => {
  const todoList = document.querySelector('.todoList')

  function createTodo(todo) {
    const todoItem = document.createElement('li')
    todoItem.className = 'todo-item'
    const p = document.createElement('p')
    p.className = 'todo-text'
    p.textContent= todo.title
    if(todo.complete) {
      p.style.textDecoration = 'line-through'
    }
    const iconDiv = document.createElement('div')
    iconDiv.className = 'todo-icons'
    const checkButton = document.createElement('span')
    checkButton.classList.add('material-icons')
    checkButton.textContent = 'check'
    const deleteButton = document.createElement('span')
    deleteButton.classList.add('material-icons')
    deleteButton.textContent = 'clear'
    iconDiv.appendChild(checkButton)
    iconDiv.appendChild(deleteButton)
    todoItem.appendChild(p)
    todoItem.appendChild(iconDiv)
    return todoItem
  }

  return {
    createTodo
  }
})();

export { todoDOM }