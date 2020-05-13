/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nvar me_1 = __webpack_require__(/*! ./me */ \"./src/me.ts\");\nvar pokemon_1 = __webpack_require__(/*! ./pokemon */ \"./src/pokemon.ts\");\nvar cache = [\n    {\n        key: 'me',\n        title: 'Me',\n        data: {\n            name: 'Новопашин Алексей Александрович',\n            group: 'M3309'\n        }\n    },\n    {\n        key: 'pokemon1',\n        title: 'Poke 1',\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/1/\"); }\n    },\n    {\n        key: 'pokemon2',\n        title: 'Poke 2',\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/2/\"); }\n    },\n    {\n        key: 'pokemon3',\n        title: 'Poke 3',\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/3/\"); }\n    },\n    {\n        key: 'pokemon4',\n        title: 'Poke 4',\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/4/\"); }\n    },\n    {\n        key: 'pokemon5',\n        title: 'Poke 5',\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/5/\"); }\n    },\n    {\n        key: 'pokemon6',\n        title: 'Poke 6',\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/6/\"); }\n    },\n    {\n        key: 'pokemon7',\n        title: 'Poke 7',\n        data: function () { return fetch(\"https://pokeapi.co/api/v2/pokemon/7/\"); }\n    },\n];\nvar root = document.querySelector('#root');\nvar app = document.createElement('div');\nvar tabList = document.createElement('ul');\nvar info = document.createElement('div');\nvar _loop_1 = function (title, key) {\n    var indexInCacheArray = cache.findIndex(function (item) { return item.key === key; });\n    var li = document.createElement('li');\n    var link = document.createElement('a');\n    link.setAttribute('href', '#');\n    li.appendChild(link);\n    link.innerText = title;\n    link.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {\n        var data, _a, infoRenderer;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    data = cache[indexInCacheArray].data;\n                    if (!(typeof data === 'function')) return [3 /*break*/, 3];\n                    _a = cache[indexInCacheArray];\n                    return [4 /*yield*/, data()];\n                case 1: return [4 /*yield*/, (_b.sent()).json()];\n                case 2:\n                    _a.data = _b.sent();\n                    _b.label = 3;\n                case 3:\n                    infoRenderer = key === 'me' ? me_1[\"default\"] : pokemon_1[\"default\"];\n                    infoRenderer(info, cache[indexInCacheArray].data);\n                    return [2 /*return*/];\n            }\n        });\n    }); });\n    tabList.appendChild(li);\n};\nfor (var _i = 0, cache_1 = cache; _i < cache_1.length; _i++) {\n    var _a = cache_1[_i], title = _a.title, key = _a.key;\n    _loop_1(title, key);\n}\napp.appendChild(tabList);\napp.appendChild(info);\nroot.appendChild(app);\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/me.ts":
/*!*******************!*\
  !*** ./src/me.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar removeAllChilds_1 = __webpack_require__(/*! ./removeAllChilds */ \"./src/removeAllChilds.ts\");\nvar render = function (target, data) {\n    removeAllChilds_1[\"default\"](target);\n    var nameDiv = document.createElement('div');\n    nameDiv.innerHTML = \"\\u0424\\u0418\\u041E: \" + data.name;\n    var groupDiv = document.createElement('div');\n    groupDiv.innerHTML = \"\\u0413\\u0440\\u0443\\u043F\\u043F\\u0430: \" + data.group;\n    target.append(nameDiv, groupDiv);\n};\nexports[\"default\"] = render;\n\n\n//# sourceURL=webpack:///./src/me.ts?");

/***/ }),

/***/ "./src/pokemon.ts":
/*!************************!*\
  !*** ./src/pokemon.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar removeAllChilds_1 = __webpack_require__(/*! ./removeAllChilds */ \"./src/removeAllChilds.ts\");\nvar pokemon = function (target, data) {\n    removeAllChilds_1[\"default\"](target);\n    console.log(data);\n    // Abilities\n    var abilities = document.createElement('div');\n    abilities.textContent = 'Abilities';\n    var abilitiesUl = document.createElement('ul');\n    abilities.appendChild(abilitiesUl);\n    data.abilities.forEach(function (ability) {\n        var abilityLi = document.createElement('li');\n        abilityLi.textContent = ability.ability.name + \" \" + (ability.is_hidden ? '(hidden)' : '');\n        abilitiesUl.appendChild(abilityLi);\n    });\n    target.appendChild(abilities);\n    // Base experience\n    var baseExperience = document.createElement('div');\n    baseExperience.textContent = \"Base experience: \" + data.base_experience;\n    target.appendChild(baseExperience);\n    // Species\n    var species = document.createElement('div');\n    species.textContent = \"Species: \" + data.species.name;\n    target.appendChild(species);\n    // Types\n    var types = document.createElement('div');\n    var typesUl = document.createElement('ul');\n    types.textContent = \"Types\";\n    types.appendChild(typesUl);\n    data.types.forEach(function (typeEntity) {\n        var typeLi = document.createElement('li');\n        typeLi.textContent = typeEntity.type.name + \" (\" + typeEntity.slot + \")\";\n        typesUl.appendChild(typeLi);\n    });\n    target.appendChild(types);\n};\nexports[\"default\"] = pokemon;\n\n\n//# sourceURL=webpack:///./src/pokemon.ts?");

/***/ }),

/***/ "./src/removeAllChilds.ts":
/*!********************************!*\
  !*** ./src/removeAllChilds.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports[\"default\"] = (function (target) {\n    target.querySelectorAll('*').forEach(function (child) {\n        child.remove();\n    });\n});\n\n\n//# sourceURL=webpack:///./src/removeAllChilds.ts?");

/***/ })

/******/ });