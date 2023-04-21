/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/fieldGame.css":
/*!*******************************!*\
  !*** ./src/css/fieldGame.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yes/./src/css/fieldGame.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_appGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/appGame.js */ \"./src/js/appGame.js\");\n/* harmony import */ var _js_appGame_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_appGame_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_fieldGame_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/fieldGame.css */ \"./src/css/fieldGame.css\");\n\n\n\n\n//# sourceURL=webpack://yes/./src/index.js?");

/***/ }),

/***/ "./src/js/alertResult/alertResult.js":
/*!*******************************************!*\
  !*** ./src/js/alertResult/alertResult.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AlertResult)\n/* harmony export */ });\nclass AlertResult {\n  constructor(parentEl) {\n    this.parentEl = parentEl;\n    // this.clickRestart = this.clickRestart.bind(this);\n  }\n\n  static get getHtml() {\n    return `\n        \n    <div class=\"alert_result\">\n        <div class=\"result_game\"></div>\n            <button class=\"btn_restart\" id=\"rest_game\">НАЧАТЬ </button>\n\n        </div>\n\n    </div>\n        `;\n  }\n\n  static get selector() {\n    return '.alert_result';\n  }\n\n  static get massage() {\n    return '.result_game';\n  }\n\n  static get btnRest() {\n    return '.btn_restart';\n  }\n\n  addElement(result) {\n    this.parentEl.insertAdjacentHTML('afterbegin', AlertResult.getHtml);\n    this.resultGame = this.parentEl.querySelector(AlertResult.massage);\n    this.resultGame.textContent = result;\n    this.btnRest = this.parentEl.querySelector(AlertResult.btnRest);\n    this.btnRest.addEventListener('click', (e) => {\n      e.preventDefault();\n      const myAlret = document.querySelector(AlertResult.selector);\n      myAlret.parentNode.removeChild(myAlret);\n    });\n  }\n\n  // clickRestart(e) {\n  //   e.preventDefault();\n  //   const myAlret = document.querySelector(AlertResult.selector);\n  //   myAlret.parentNode.removeChild(myAlret);\n  // }\n}\n\n\n//# sourceURL=webpack://yes/./src/js/alertResult/alertResult.js?");

/***/ }),

/***/ "./src/js/appGame.js":
/*!***************************!*\
  !*** ./src/js/appGame.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { default: AlertResult } = __webpack_require__(/*! ./alertResult/alertResult.js */ \"./src/js/alertResult/alertResult.js\");\nconst { default: FieldGame } = __webpack_require__(/*! ./fieldGame/fielGame.js */ \"./src/js/fieldGame/fielGame.js\");\nconst { default: Goblin } = __webpack_require__(/*! ./goblin/goblin.js */ \"./src/js/goblin/goblin.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const fiedls = document.querySelector('.fieldGame');\n  const myGame = document.querySelector('.game');\n\n  const count = document.querySelector('.count');\n  const miss = document.querySelector('.miss');\n  const gonlin = new Goblin(fiedls);\n  const boxes = new FieldGame('.fieldGame');\n  const ShowResalt = new AlertResult(myGame);\n\n  let statusGame = true;\n  // btn.addEventListener('click', () => {\n  //   statusGame = !statusGame;\n\n  //   if (statusGame) {\n  //     btn.style.backgroundColor = ['red'];\n  //     btn.textContent = 'STOP';\n  //   } else {\n  //     btn.style.backgroundColor = ['green'];\n  //     btn.textContent = 'STAR';\n  //   }\n\n  //   const game = setInterval(() => {\n  //     gonlin.movingdGoblin();\n  //     count.textContent = `СЧЕТ : ${boxes.count}`;\n  //     miss.textContent = `ПРОМАХ : ${boxes.miss}`;\n\n  //     if (!statusGame || boxes.miss > 4) {\n  //       boxes.count = 0;\n  //       boxes.miss = 0;\n  //       btn.style.backgroundColor = ['green'];\n  //       btn.textContent = 'START';\n  //       clearInterval(game);\n  //     }\n  //   }, 1000);\n  // });\n  //  console.log(boxes.element)\n  document.addEventListener('click', (e) => {\n    if (e.target.id === 'rest_game') {\n      statusGame = true;\n      const game = setInterval(() => {\n        gonlin.movingdGoblin();\n        count.textContent = `СЧЕТ : ${boxes.count}`;\n        miss.textContent = `ПРОМАХ : ${boxes.miss}`;\n\n        if (!statusGame || boxes.miss > 4) {\n          boxes.count = 0;\n          boxes.miss = 0;\n          // btn.style.backgroundColor = ['green'];\n          // btn.textContent = 'START';\n          ShowResalt.addElement('ТЫ промазал 5 раз');\n          clearInterval(game);\n        }\n      }, 1000);\n    }\n  });\n  const game = setInterval(() => {\n    gonlin.movingdGoblin();\n    count.textContent = `СЧЕТ : ${boxes.count}`;\n    miss.textContent = `ПРОМАХ : ${boxes.miss}`;\n\n    if (!statusGame || boxes.miss > 4) {\n      boxes.count = 0;\n      boxes.miss = 0;\n      // btn.style.backgroundColor = ['green'];\n      // btn.textContent = 'START';\n      ShowResalt.addElement('ТЫ промазал 5 раз');\n      clearInterval(game);\n    }\n  }, 1000);\n});\n\n\n//# sourceURL=webpack://yes/./src/js/appGame.js?");

/***/ }),

/***/ "./src/js/fieldGame/fielGame.js":
/*!**************************************!*\
  !*** ./src/js/fieldGame/fielGame.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FieldGame)\n/* harmony export */ });\nclass FieldGame {\n  constructor(element) {\n    if (typeof element === 'string') {\n      element = document.querySelector(element);\n    }\n\n    this.element = element;\n    this.onclickBox = this.onclickBox.bind(this);\n    this.element.addEventListener('click', this.onclickBox);\n    this.count = 0;\n    this.miss = 0;\n  }\n\n  onclickBox(e) {\n    if (e.target.classList.contains('box_active')) {\n      this.count += 1;\n    } else {\n      this.miss += 1;\n    }\n    // console.log('click');\n    // this.element.style.cursor = '/molot_down.png'\n    // setTimeout(() => {\n    //   // this.element.style.cursor = url('/molot_up.png')\n    // }, 300);\n    // this.element.style.cursor = 'pointer'\n  }\n}\n\n\n//# sourceURL=webpack://yes/./src/js/fieldGame/fielGame.js?");

/***/ }),

/***/ "./src/js/goblin/goblin.js":
/*!*********************************!*\
  !*** ./src/js/goblin/goblin.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Goblin)\n/* harmony export */ });\nclass Goblin {\n  constructor(fields) {\n    this.fields = fields;\n  }\n\n  movingdGoblin() {\n    const boxes = this.fields.querySelectorAll('.box');\n    const active = this.fields.querySelector('.box_active');\n\n    if (active === null) {\n      // console.log('Start');\n\n      boxes[Math.floor(Math.random() * 16)].classList.add('box_active');\n    } else {\n      const boxId = Number(active.dataset.id);\n      let item = Math.floor(Math.random() * 16);\n\n      active.classList.remove('box_active');\n\n      if (boxId === item) {\n        // console.log(`ПОвтор ${boxId} ${item}`)\n        item = Math.floor(Math.random() * 4);\n      }\n\n      boxes[item].classList.add('box_active');\n    }\n  }\n}\n\n\n//# sourceURL=webpack://yes/./src/js/goblin/goblin.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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