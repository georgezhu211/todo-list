import Project, { projectDOM } from "./project";
import Todo from "./todo";

const App = (() => {
  // test dummies
  const defaultProject = new Project('Today')

  let projects = [defaultProject]
  let currentIndex = 0
  let currentProject = projects[currentIndex]
  // project DOM
  const projectList = document.querySelector('.project-list')
  const projectForm = document.querySelector('.project-form')
  const projectInput = document.querySelector('.project-input')
  const projectDelete = document.querySelector('.project-delete')
  // todo DOM
  const todoForm = document.querySelector('.todo-form')
  const todoInput = document.querySelector('.todo-input')

  // project events
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const projectTitle = projectInput.value
    if(invalidInput(projectTitle)) return
    const newProject = createProject(projectTitle)
    projects.push(newProject)
    projectInput.value = ""
    render()
    save()
  })
  projectDelete.addEventListener('click', (e) => {
    projects.splice(currentIndex, 1)
    render()
    save()
  })
  projectList.addEventListener('click', (e) => {
    currentIndex = +e.target.dataset.index
    currentProject = projects[currentIndex]
    projectDOM.render(currentProject)
    save()
  })
  // todo events
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoName = todoInput.value
    if(invalidInput(todoName)) return
    projectDOM.projectAddTodo(currentProject, todoName)
    projectDOM.render(currentProject)
    todoInput.value = ""
    save()
  })

  document.addEventListener('click', (e) => {
    if(e.target && e.target.textContent == 'check') {
      const todoIndex = e.target.parentNode.parentNode.dataset.index
      const todo = currentProject.todos[todoIndex]
      if(todo.complete) {
        todo.complete = false
      } else {
        todo.complete = true
      }
    }
    projectDOM.render(currentProject)
    save()
  })

  document.addEventListener('click', (e) => {
    if(e.target && e.target.textContent == 'clear') {
      const todoIndex = e.target.parentNode.parentNode.dataset.index
      currentProject.todos.splice(todoIndex, 1)
    }
    projectDOM.render(currentProject)
    save()
  })
  // methods

  function initialize() {
    load()
    render()
    projectDOM.render(projects[0])
  }

  function render() {
    projectList.innerHTML = ''
    projects.forEach((project) => {
      const projectItem = document.createElement('li')
      projectItem.className = 'project-item'
      projectItem.textContent = project.title
      projectItem.setAttribute('data-index', projects.indexOf(project))
      projectList.appendChild(projectItem)
    })
  }

  function createProject(projectTitle) {
    return new Project(projectTitle)
  }

  function invalidInput(name) {
    if(name == "") {
      console.log('invalid input')
      return true
    }
    return false
  }

  function save() {
    localStorage["projects"] = JSON.stringify(projects)
  }

  function load() {
    projects = deserialize(JSON.parse(localStorage["projects"]))
  }

  function deserialize(projects) {
    const temp = []
    projects.forEach((project) => {
      const newProject = new Project(project.title)
      project.todos.forEach((todo) => {
        const newTodo = new Todo(todo.title, todo.complete)
        newProject.todos.push(newTodo)
      })
      temp.push(newProject)
    })
    return temp
  }

  return {
    initialize
  }
})();

App.initialize()