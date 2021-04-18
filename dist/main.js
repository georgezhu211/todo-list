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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst App = (() => {\n  // test dummies\n  const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__.default('Default Project')\n  const project1 = new _project__WEBPACK_IMPORTED_MODULE_0__.default('project1')\n  const project2 = new _project__WEBPACK_IMPORTED_MODULE_0__.default('project2')\n  const project3 = new _project__WEBPACK_IMPORTED_MODULE_0__.default('project3')\n\n  const projects = [defaultProject, project1, project2, project3]\n  let currentIndex = 0\n  // DOM\n  const projectList = document.querySelector('.project-list')\n  const projectForm = document.querySelector('.project-form')\n  const projectInput = document.querySelector('.project-input')\n  const projectDelete = document.querySelector('.project-delete')\n  // events\n  projectForm.addEventListener('submit', (e) => {\n    e.preventDefault()\n    const projectTitle = projectInput.value\n    if(invalidInput(projectTitle)) return\n    const newProject = createProject(projectTitle)\n    projects.push(newProject)\n    projectInput.value = \"\"\n    render()\n  })\n  projectDelete.addEventListener('click', (e) => {\n    projects.splice(currentIndex, 1)\n    render()\n  })\n  projectList.addEventListener('click', (e) => {\n    currentIndex = +e.target.dataset.index\n  })\n  // methods\n  function render() {\n    projectList.innerHTML = ''\n    projects.forEach((project) => {\n      const projectItem = document.createElement('li')\n      projectItem.className = 'project-item'\n      projectItem.textContent = project.title\n      projectItem.setAttribute('data-index', projects.indexOf(project))\n      projectList.appendChild(projectItem)\n    })\n  }\n\n  function createProject(projectTitle) {\n    return new _project__WEBPACK_IMPORTED_MODULE_0__.default(projectTitle)\n  }\n\n  function invalidInput(name) {\n    if(name == \"\") {\n      console.log('invalid input')\n      return true\n    }\n    return false\n  }\n\n  return {\n    render,\n    createProject\n  }\n})();\n\nApp.render()\nApp.createProject()\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(title) {\n    this.title = title\n    this.todos = []\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

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