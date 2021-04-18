import Project from "./project";

const App = (() => {
  // test dummies
  const defaultProject = new Project('Default Project')
  const project1 = new Project('project1')
  const project2 = new Project('project2')
  const project3 = new Project('project3')

  const projects = [defaultProject, project1, project2, project3]
  let currentIndex = 0
  // DOM
  const projectList = document.querySelector('.project-list')
  const projectForm = document.querySelector('.project-form')
  const projectInput = document.querySelector('.project-input')
  const projectDelete = document.querySelector('.project-delete')
  // events
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
  })
  // methods
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
    render,
    createProject
  }
})();

App.render()
App.createProject()