/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nconst App = (() => {\n  // test dummies\n  const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default('Today')\n\n  let projects = [defaultProject]\n  let currentIndex = 0\n  let currentProject = projects[currentIndex]\n  // project DOM\n  const projectList = document.querySelector('.project-list')\n  const projectForm = document.querySelector('.project-form')\n  const projectInput = document.querySelector('.project-input')\n  const projectDelete = document.querySelector('.project-delete')\n  // todo DOM\n  const todoForm = document.querySelector('.todo-form')\n  const todoInput = document.querySelector('.todo-input')\n\n  // project events\n  projectForm.addEventListener('submit', (e) => {\n    e.preventDefault()\n    const projectTitle = projectInput.value\n    if(invalidInput(projectTitle)) return\n    const newProject = createProject(projectTitle)\n    projects.push(newProject)\n    projectInput.value = \"\"\n    render()\n    save()\n  })\n  projectDelete.addEventListener('click', (e) => {\n    projects.splice(currentIndex, 1)\n    render()\n    save()\n  })\n  projectList.addEventListener('click', (e) => {\n    currentIndex = +e.target.dataset.index\n    currentProject = projects[currentIndex]\n    _project__WEBPACK_IMPORTED_MODULE_0__.projectDOM.render(currentProject)\n    save()\n  })\n  // todo events\n  todoForm.addEventListener('submit', (e) => {\n    e.preventDefault()\n    const todoName = todoInput.value\n    if(invalidInput(todoName)) return\n    _project__WEBPACK_IMPORTED_MODULE_0__.projectDOM.projectAddTodo(currentProject, todoName)\n    _project__WEBPACK_IMPORTED_MODULE_0__.projectDOM.render(currentProject)\n    todoInput.value = \"\"\n    save()\n  })\n\n  document.addEventListener('click', (e) => {\n    if(e.target && e.target.textContent == 'check') {\n      const todoIndex = e.target.parentNode.parentNode.dataset.index\n      const todo = currentProject.todos[todoIndex]\n      if(todo.complete) {\n        todo.complete = false\n      } else {\n        todo.complete = true\n      }\n    }\n    _project__WEBPACK_IMPORTED_MODULE_0__.projectDOM.render(currentProject)\n    save()\n  })\n\n  document.addEventListener('click', (e) => {\n    if(e.target && e.target.textContent == 'clear') {\n      const todoIndex = e.target.parentNode.parentNode.dataset.index\n      currentProject.todos.splice(todoIndex, 1)\n    }\n    _project__WEBPACK_IMPORTED_MODULE_0__.projectDOM.render(currentProject)\n    save()\n  })\n  // methods\n\n  function initialize() {\n    load()\n    render()\n    _project__WEBPACK_IMPORTED_MODULE_0__.projectDOM.render(projects[0])\n  }\n\n  function render() {\n    projectList.innerHTML = ''\n    projects.forEach((project) => {\n      const projectItem = document.createElement('li')\n      projectItem.className = 'project-item'\n      projectItem.textContent = project.title\n      projectItem.setAttribute('data-index', projects.indexOf(project))\n      projectList.appendChild(projectItem)\n    })\n  }\n\n  function createProject(projectTitle) {\n    return new _project__WEBPACK_IMPORTED_MODULE_0__.default(projectTitle)\n  }\n\n  function invalidInput(name) {\n    if(name == \"\") {\n      console.log('invalid input')\n      return true\n    }\n    return false\n  }\n\n  function save() {\n    localStorage[\"projects\"] = JSON.stringify(projects)\n  }\n\n  function load() {\n    projects = deserialize(JSON.parse(localStorage[\"projects\"]))\n  }\n\n  function deserialize(projects) {\n    const temp = []\n    projects.forEach((project) => {\n      const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default(project.title)\n      project.todos.forEach((todo) => {\n        const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__.default(todo.title, todo.complete)\n        newProject.todos.push(newTodo)\n      })\n      temp.push(newProject)\n    })\n    return temp\n  }\n\n  return {\n    initialize\n  }\n})();\n\nApp.initialize()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project),\n/* harmony export */   \"projectDOM\": () => (/* binding */ projectDOM)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nclass Project {\n  constructor(title) {\n    this.title = title\n    this.todos = []\n  }\n\n  add(todo) {\n    this.todos.push(todo)\n    return this.todos\n  }\n}\n\nconst projectDOM = (() => {\n  const projectTitle = document.querySelector('.project-title')\n  const todoList = document.querySelector('.todo-list')\n\n\n  function render(project) {\n    projectTitle.textContent = project.title\n    todoList.innerHTML = \"\"\n    project.todos.forEach((todo) => {\n      const todoItem = _todo__WEBPACK_IMPORTED_MODULE_0__.todoDOM.createTodo(todo)\n      todoItem.setAttribute('data-index', project.todos.indexOf(todo))\n      todoList.appendChild(todoItem)\n    })\n  }\n\n  function projectAddTodo(project, todoName) {\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default(todoName)\n    project.add(todo)\n  }\n\n  return {\n    render,\n    projectAddTodo\n  }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo),\n/* harmony export */   \"todoDOM\": () => (/* binding */ todoDOM)\n/* harmony export */ });\nclass Todo {\n  constructor(title, complete=false) {\n    this.title = title\n    this.complete = complete;\n  }\n}\n\nconst todoDOM = (() => {\n  const todoList = document.querySelector('.todoList')\n\n  function createTodo(todo) {\n    const todoItem = document.createElement('li')\n    todoItem.className = 'todo-item'\n    const p = document.createElement('p')\n    p.className = 'todo-text'\n    p.textContent= todo.title\n    if(todo.complete) {\n      p.style.textDecoration = 'line-through'\n    }\n    const iconDiv = document.createElement('div')\n    iconDiv.className = 'todo-icons'\n    const checkButton = document.createElement('span')\n    checkButton.classList.add('material-icons')\n    checkButton.textContent = 'check'\n    const deleteButton = document.createElement('span')\n    deleteButton.classList.add('material-icons')\n    deleteButton.textContent = 'clear'\n    iconDiv.appendChild(checkButton)\n    iconDiv.appendChild(deleteButton)\n    todoItem.appendChild(p)\n    todoItem.appendChild(iconDiv)\n    return todoItem\n  }\n\n  return {\n    createTodo\n  }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;