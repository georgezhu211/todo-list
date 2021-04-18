import Todo from "./todo";

export default class Project {
  constructor(title) {
    this.title = title
    this.todos = [new Todo('todo1'), new Todo('todo2'), new Todo('todo3')]
  }

  add(todo) {
    this.todos.push(todo)
    return this.todos
  }
}

const projectDOM = (() => {
  const projectTitle = document.querySelector('.project-title')
  const todoList = document.querySelector('.todo-list')

  function render(project) {
    projectTitle.textContent = project.title
    todoList.innerHTML = ""
    project.todos.forEach((todo) => {
      const todoItem = document.createElement('li')
      todoItem.setAttribute('data-index', project.todos.indexOf(todo))
      todoItem.textContent = todo.title
      todoList.appendChild(todoItem)
    })
  }

  function projectAddTodo(project, todoName) {
    const todo = new Todo(todoName)
    project.add(todo)
  }

  return {
    render,
    projectAddTodo
  }
})();

export { projectDOM }