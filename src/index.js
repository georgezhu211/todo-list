import Project, { projectDOM } from "./project";

const App = (() => {
  // test dummies
  const defaultProject = new Project('Default Project')
  const project1 = new Project('project1')
  const project2 = new Project('project2')
  const project3 = new Project('project3')

  const projects = [defaultProject, project1, project2, project3]
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
  })
  projectDelete.addEventListener('click', (e) => {
    projects.splice(currentIndex, 1)
    render()
  })
  projectList.addEventListener('click', (e) => {
    currentIndex = +e.target.dataset.index
    currentProject = projects[currentIndex]
    projectDOM.render(currentProject)
  })
  // todo events
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const todoName = todoInput.value
    if(invalidInput(todoName)) return
    projectDOM.projectAddTodo(currentProject, todoName)
    projectDOM.render(currentProject)
    todoInput.value = ""
  })

  document.addEventListener('click', (e) => {
    if(e.target && e.target.textContent == 'check') {
      const todoIndex = e.target.parentNode.parentNode.dataset.index
      const todo = currentProject.todos[todoIndex]
      console.log(todo.complete)
      if(todo.complete) {
        todo.complete = false
      } else {
        todo.complete = true
      }
    }
    projectDOM.render(currentProject)
  })

  document.addEventListener('click', (e) => {
    if(e.target && e.target.textContent == 'clear') {
      const todoIndex = e.target.parentNode.parentNode.dataset.index
      currentProject.todos.splice(todoIndex, 1)
    }
    projectDOM.render(currentProject)
  })
  // methods

  function initialize() {
    render()
    projectDOM.render(currentProject)
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

  return {
    initialize
  }
})();

App.initialize()