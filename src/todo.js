export default class Todo {
  constructor(title) {
    this.title = title
  }
}

const todoDOM = (() => {
  const todoList = document.querySelector('.todoList')
  

  function createTodo(todoName) {
    const todoItem = document.createElement('li')
    todoItem.className = 'todo-item'
    const p = document.createElement('p')
    p.className = 'todo-text'
    p.textContent= todoName
    const iconDiv = document.createElement('div')
    iconDiv.className = 'todo-icons'
    const checkButton = document.createElement('span')
    checkButton.className = 'material-icons'
    checkButton.textContent = 'check'
    const deleteButton = document.createElement('span')
    deleteButton.className = 'material-icons'
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