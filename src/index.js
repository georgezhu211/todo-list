
const App = (() => {
  const projects = []

  const projectList = document.querySelector('.project-list')

  function render() {
    console.log(projectList)
  }

  return {
    render
  }
})();

App.render()