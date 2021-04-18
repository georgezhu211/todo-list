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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst App = (() => {\n  // test dummies\n  const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default('Default Project')\n  const project1 = new _project__WEBPACK_IMPORTED_MODULE_0__.default('project1')\n  const project2 = new _project__WEBPACK_IMPORTED_MODULE_0__.default('project2')\n  const project3 = new _project__WEBPACK_IMPORTED_MODULE_0__.default('project3')\n\n  const projects = [defaultProject, project1, project2, project3]\n  let currentIndex = 0\n  let currentProject = projects[currentIndex]\n  // project DOM\n  const projectList = document.querySelector('.project-list')\n  const projectForm = document.querySelector('.project-form')\n  const projectInput = document.querySelector('.project-input')\n  const projectDelete = document.querySelector('.project-delete')\n  // todo DOM\n  const todoForm = document.querySelector('.todo-form')\n  const todoInput = document.querySelector('.todo-input')\n\n  // project events\n  projectForm.addEventListener('submit', (e) => {\n    e.preventDefault()\n    const projectTitle = projectInput.value\n    if(invalidInput(projectTitle)) return\n    const newProject = createProject(projectTitle)\n    projects.push(newProject)\n    projectInput.value = \"\"\n    render()\n  })\n  projectDelete.addEventListener('click', (e) => {\n    projects.splice(currentIndex, 1)\n    render()\n  })\n  projectList.addEventListener('click', (e) => {\n    currentIndex = +e.target.dataset.index\n    currentProject = projects[currentIndex]\n    _project__WEBPACK_IMPORTED_MODULE_0__.projectDOM.render(currentProject)\n  })\n  // todo events\n  todoForm.addEventListener('submit', (e) => {\n    e.preventDefault()\n    const todoName = todoInput.value\n    if(invalidInput(todoName)) return\n    _project__WEBPACK_IMPORTED_MODULE_0__.projectDOM.projectAddTodo(currentProject, todoName)\n    _project__WEBPACK_IMPORTED_MODULE_0__.projectDOM.render(currentProject)\n    todoInput.value = \"\"\n  })\n  // methods\n\n  function initialize() {\n    render()\n    _project__WEBPACK_IMPORTED_MODULE_0__.projectDOM.render(currentProject)\n  }\n\n  function render() {\n    projectList.innerHTML = ''\n    projects.forEach((project) => {\n      const projectItem = document.createElement('li')\n      projectItem.className = 'project-item'\n      projectItem.textContent = project.title\n      projectItem.setAttribute('data-index', projects.indexOf(project))\n      projectList.appendChild(projectItem)\n    })\n  }\n\n  function createProject(projectTitle) {\n    return new _project__WEBPACK_IMPORTED_MODULE_0__.default(projectTitle)\n  }\n\n  function invalidInput(name) {\n    if(name == \"\") {\n      console.log('invalid input')\n      return true\n    }\n    return false\n  }\n\n  return {\n    initialize\n  }\n})();\n\nApp.initialize()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project),\n/* harmony export */   \"projectDOM\": () => (/* binding */ projectDOM)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nclass Project {\n  constructor(title) {\n    this.title = title\n    this.todos = [new _todo__WEBPACK_IMPORTED_MODULE_0__.default('todo1'), new _todo__WEBPACK_IMPORTED_MODULE_0__.default('todo2'), new _todo__WEBPACK_IMPORTED_MODULE_0__.default('todo3')]\n  }\n\n  add(todo) {\n    this.todos.push(todo)\n    return this.todos\n  }\n}\n\nconst projectDOM = (() => {\n  const projectTitle = document.querySelector('.project-title')\n  const todoList = document.querySelector('.todo-list')\n\n  function render(project) {\n    projectTitle.textContent = project.title\n    todoList.innerHTML = \"\"\n    project.todos.forEach((todo) => {\n      const todoItem = _todo__WEBPACK_IMPORTED_MODULE_0__.todoDOM.createTodo(todo.title)\n      todoList.appendChild(todoItem)\n    })\n  }\n\n  function projectAddTodo(project, todoName) {\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default(todoName)\n    project.add(todo)\n  }\n\n  return {\n    render,\n    projectAddTodo\n  }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo),\n/* harmony export */   \"todoDOM\": () => (/* binding */ todoDOM)\n/* harmony export */ });\nclass Todo {\n  constructor(title) {\n    this.title = title\n  }\n}\n\nconst todoDOM = (() => {\n  const todoList = document.querySelector('.todoList')\n  \n\n  function createTodo(todoName) {\n    const todoItem = document.createElement('li')\n    todoItem.className = 'todo-item'\n    const p = document.createElement('p')\n    p.className = 'todo-text'\n    p.textContent= todoName\n    const iconDiv = document.createElement('div')\n    iconDiv.className = 'todo-icons'\n    const checkButton = document.createElement('span')\n    checkButton.className = 'material-icons'\n    checkButton.textContent = 'check'\n    const deleteButton = document.createElement('span')\n    deleteButton.className = 'material-icons'\n    deleteButton.textContent = 'clear'\n    iconDiv.appendChild(checkButton)\n    iconDiv.appendChild(deleteButton)\n    todoItem.appendChild(p)\n    todoItem.appendChild(iconDiv)\n    return todoItem\n  }\n\n  return {\n    createTodo\n  }\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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