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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    background-color: #c89a3c;\r\n    align-items: center;\r\n    height: 6rem;\r\n}\r\n\r\n.encabezado {\r\n    display: flex;\r\n    gap: 1rem;\r\n    align-items: center;\r\n}\r\n\r\n.encabezado > p {\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n\r\n.encabezado > img {\r\n    height: 3.5rem;\r\n    filter: invert();\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    gap: 1.5rem;\r\n}\r\n\r\nbutton {\r\n    font-size: 1.5rem;\r\n}\r\n\r\nbutton:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    min-height: calc(100vh - 6rem);\r\n    background-color: #c89a3c;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.cuadro {\r\n    display: flex;\r\n    position: relative;\r\n    justify-content: center;\r\n}\r\n\r\n.cuadro > img {\r\n    height: 49rem;\r\n    width: auto;\r\n}\r\n\r\n.texto {\r\n    position: absolute;\r\n    color: white;\r\n    margin-top: 6%;\r\n}\r\n\r\n.texto > h1 {\r\n    text-align: center;\r\n    font-size: 4rem;\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.texto > h2 {\r\n    text-align: center;\r\n    font-size: 2.5rem;\r\n    margin-top: 2rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.texto > p {\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    margin-top: 1rem;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.menutablero {\r\n    width: 89rem;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n    margin-top: 1%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    margin-bottom: 2%;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.menutablero > h1 {\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\n.menutablero > h2 {\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.carta_entrada {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-auto-flow: column;\r\n    gap: 1.5rem;\r\n    margin-inline: 1.5rem;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.entradas {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid blue;\r\n    overflow: hidden;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.entradas > img {\r\n    height: 16rem;\r\n}\r\n\r\n.entradas > p {\r\n    font-size: 1.1rem;\r\n    text-align: justify;\r\n    margin-inline: 1rem;\r\n}\r\n\r\n.pedidosentrada {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-inline: 1rem;\r\n    margin-top: auto;\r\n    align-items: center;\r\n}\r\n\r\n.pedidosentrada > p {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.pedidosentrada > button {\r\n    height: 3.2rem;\r\n    width: 3.2rem;\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.iconopedir {\r\n    height: 2.3rem;\r\n    width: auto;\r\n}\r\n\r\n.cartas_fondos {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(2, 1fr);\r\n    grid-auto-flow: column;\r\n    gap: 1.5rem;\r\n    margin-inline: 1.5rem;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.fondos {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid green;\r\n    overflow: hidden;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.fondos > img {\r\n    height: 16rem;\r\n}\r\n\r\n.fondos > p {\r\n    font-size: 1.1rem;\r\n    text-align: justify;\r\n    margin-inline: 1rem;\r\n}\r\n\r\n.pedidosfondo {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-inline: 1rem;\r\n    margin-top: auto;\r\n    align-items: center;\r\n}\r\n\r\n.pedidosfondo > p {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.pedidosfondo > button {\r\n    height: 3.2rem;\r\n    width: 3.2rem;\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.carta_postres {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-auto-flow: column;\r\n    gap: 1.5rem;\r\n    margin-inline: 1.5rem;\r\n    margin-top: 1rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.postres {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid orange;\r\n    overflow: hidden;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.postres > img {\r\n    height: 16rem;\r\n}\r\n\r\n.postres > p {\r\n    font-size: 1.1rem;\r\n    text-align: justify;\r\n    margin-inline: 1rem;\r\n}\r\n\r\n.pedidosbebida {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-inline: 1rem;\r\n    margin-top: auto;\r\n    align-items: center;\r\n}\r\n\r\n.pedidosbebida > p {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.pedidosbebida > button {\r\n    height: 3.2rem;\r\n    width: 3.2rem;\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.cuadrocontacto {\r\n    width: 89rem;\r\n    border: 1px solid black;\r\n    border-radius: 2rem;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    overflow: hidden;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.cuadromapa {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 1rem;\r\n    margin-top: 1.5rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.horario {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n}\r\n\r\n.horario > h2 {\r\n    font-size: 2rem;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.horario > p {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.cuadromapa > img {\r\n    height: 25rem;\r\n    width: 38rem;\r\n    border: 1px solid green;\r\n    border-radius: 1.5rem;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1.5rem;\r\n    align-self: center;\r\n}\r\n\r\n.cuadroform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-right: 1rem;\r\n    margin-top: 1.5rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.contacto {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.contacto > h3 {\r\n    font-size: 1.5rem;\r\n    margin-top: 1.2rem;\r\n    margin-bottom: 1.2rem;\r\n}\r\n.formulario {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.campo1,\r\n.campo2,\r\n.campo3 {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.campo1 > label {\r\n    font-size: 1.5rem;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.campo1 > input {\r\n    height: 2rem;\r\n    font-size: 1.1rem;\r\n    margin-right: 2%;\r\n    border: 1px solid black;\r\n    border-radius: 8px;\r\n}\r\n\r\n.campo2 > label {\r\n    font-size: 1.5rem;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.campo2 > input {\r\n    height: 2rem;\r\n    font-size: 1.1rem;\r\n    margin-right: 2%;\r\n    border: 1px solid black;\r\n    border-radius: 8px;\r\n}\r\n\r\n.campo3 > label {\r\n    font-size: 1.5rem;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.campo3 > textarea {\r\n    resize: none;\r\n    height: 5.6rem;\r\n    margin-bottom: 1.8rem;\r\n    font-size: 1.1rem;\r\n    margin-right: 2%;\r\n    border: 1px solid black;\r\n    border-radius: 8px;\r\n}\r\n\r\n.formulario > button {\r\n    align-self: center;\r\n    padding-inline: 1rem;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    border: 1px solid black;\r\n    border-radius: 8px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/images/anticuchos.jpg"
/*!***********************************!*\
  !*** ./src/images/anticuchos.jpg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"114ffc99120694d4bcd5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/anticuchos.jpg?\n}");

/***/ },

/***/ "./src/images/arrozmariscos.jpg"
/*!**************************************!*\
  !*** ./src/images/arrozmariscos.jpg ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f569d4699651abb16a0a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/arrozmariscos.jpg?\n}");

/***/ },

/***/ "./src/images/arrozpato.jpg"
/*!**********************************!*\
  !*** ./src/images/arrozpato.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c60bb870c24c75eabb9a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/arrozpato.jpg?\n}");

/***/ },

/***/ "./src/images/carapulcra.jpg"
/*!***********************************!*\
  !*** ./src/images/carapulcra.jpg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a70cee8a0cfc06a1681a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/carapulcra.jpg?\n}");

/***/ },

/***/ "./src/images/ceviche.jpg"
/*!********************************!*\
  !*** ./src/images/ceviche.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"52c3465e167c45cb4bc0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ceviche.jpg?\n}");

/***/ },

/***/ "./src/images/chicha.jpeg"
/*!********************************!*\
  !*** ./src/images/chicha.jpeg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3b76acc811d760438706.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chicha.jpeg?\n}");

/***/ },

/***/ "./src/images/emoliente.jpg"
/*!**********************************!*\
  !*** ./src/images/emoliente.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ad4879f3a17f0184ce8c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/emoliente.jpg?\n}");

/***/ },

/***/ "./src/images/fondohome.png"
/*!**********************************!*\
  !*** ./src/images/fondohome.png ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"624a300ccc967eab5352.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/fondohome.png?\n}");

/***/ },

/***/ "./src/images/limonada.jpg"
/*!*********************************!*\
  !*** ./src/images/limonada.jpg ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b2bdef60e294af321c61.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/limonada.jpg?\n}");

/***/ },

/***/ "./src/images/lomosaltado.jpg"
/*!************************************!*\
  !*** ./src/images/lomosaltado.jpg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3512b36eeb3847bb5a78.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/lomosaltado.jpg?\n}");

/***/ },

/***/ "./src/images/mapa.jpg"
/*!*****************************!*\
  !*** ./src/images/mapa.jpg ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c51c2c85bcf726557e24.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/mapa.jpg?\n}");

/***/ },

/***/ "./src/images/papashuancaina.jpg"
/*!***************************************!*\
  !*** ./src/images/papashuancaina.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b10025c3f7680ec53882.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/papashuancaina.jpg?\n}");

/***/ },

/***/ "./src/images/polloalabrasa.jpg"
/*!**************************************!*\
  !*** ./src/images/polloalabrasa.jpg ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6e4b351da00ceb5ef718.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/polloalabrasa.jpg?\n}");

/***/ },

/***/ "./src/images/restaurant.svg"
/*!***********************************!*\
  !*** ./src/images/restaurant.svg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"bdbb3dd0d9c59946dd93.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant.svg?\n}");

/***/ },

/***/ "./src/images/roomservice.svg"
/*!************************************!*\
  !*** ./src/images/roomservice.svg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4d3f4e7f78b8194393a2.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/roomservice.svg?\n}");

/***/ },

/***/ "./src/images/tallarinesverdes.jpg"
/*!*****************************************!*\
  !*** ./src/images/tallarinesverdes.jpg ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e9cb1499552fa22934e5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/tallarinesverdes.jpg?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _images_mapa_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/mapa.jpg */ \"./src/images/mapa.jpg\");\n\r\n\r\nfunction loadContact() {\r\n    const container = document.getElementById(\"content\");\r\n    const cuadrocontacto = document.createElement(\"div\");\r\n    cuadrocontacto.classList.add(\"cuadrocontacto\");\r\n    const cuadromapa = document.createElement(\"div\");\r\n    cuadromapa.classList.add(\"cuadromapa\");\r\n    const horario = document.createElement(\"div\");\r\n    horario.classList.add(\"horario\");\r\n    const atencion1 = document.createElement(\"h2\");\r\n    atencion1.textContent = \"HORARIO\";\r\n    const atencion2 = document.createElement(\"p\");\r\n    atencion2.textContent = \"Lun - Dom: 8am - 8pm\";\r\n    const mapaimagen = new Image();\r\n    mapaimagen.src = _images_mapa_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    const cuadroform = document.createElement(\"div\");\r\n    cuadroform.classList.add(\"cuadroform\");\r\n    const contacto = document.createElement(\"div\");\r\n    contacto.classList.add(\"contacto\");\r\n    const numero = document.createElement(\"h3\");\r\n    numero.textContent = \"📞 Teléfono: +51 1456 7890\";\r\n    const correo = document.createElement(\"h3\");\r\n    correo.textContent = \"📧 Correo: reservas@saborysol.com\";\r\n    const formulario = document.createElement(\"form\");\r\n    formulario.classList.add(\"formulario\");\r\n\r\n    const campo1 = document.createElement(\"div\");\r\n    campo1.classList.add(\"campo1\");\r\n    const labelNombre = document.createElement(\"label\");\r\n    labelNombre.textContent = \"Nombre: \";\r\n    const inputNombre = document.createElement(\"input\");\r\n    inputNombre.type = \"text\";\r\n    inputNombre.placeholder = \"Tu nombre\";\r\n\r\n    const campo2 = document.createElement(\"div\");\r\n    campo2.classList.add(\"campo2\");\r\n    const labelEmail = document.createElement(\"label\");\r\n    labelEmail.textContent = \"Correo:\";\r\n    const inputEmail = document.createElement(\"input\");\r\n    inputEmail.type = \"email\";\r\n    inputEmail.placeholder = \"Tu correo\";\r\n\r\n    const campo3 = document.createElement(\"div\");\r\n    campo3.classList.add(\"campo3\");\r\n    const labelMensaje = document.createElement(\"label\");\r\n    labelMensaje.textContent = \"Mensaje:\";\r\n    const textarea = document.createElement(\"textarea\");\r\n    textarea.placeholder = \"Tu mensaje\";\r\n\r\n    const boton = document.createElement(\"button\");\r\n    boton.textContent = \"Enviar\";\r\n\r\n    boton.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        alert(\"Se envio el formulario de contacto\");\r\n    });\r\n\r\n    container.appendChild(cuadrocontacto);\r\n    cuadrocontacto.appendChild(cuadromapa);\r\n    cuadromapa.appendChild(horario);\r\n    horario.appendChild(atencion1);\r\n    horario.appendChild(atencion2);\r\n    cuadromapa.appendChild(mapaimagen);\r\n    cuadrocontacto.appendChild(cuadroform);\r\n    cuadroform.appendChild(contacto);\r\n    contacto.appendChild(numero);\r\n    contacto.appendChild(correo);\r\n    cuadroform.appendChild(formulario);\r\n    formulario.appendChild(campo1);\r\n    campo1.appendChild(labelNombre);\r\n    campo1.appendChild(inputNombre);\r\n    formulario.appendChild(campo2);\r\n    campo2.appendChild(labelEmail);\r\n    campo2.appendChild(inputEmail);\r\n    formulario.appendChild(campo3);\r\n    campo3.appendChild(labelMensaje);\r\n    campo3.appendChild(textarea);\r\n    formulario.append(boton);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _images_fondohome_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/fondohome.png */ \"./src/images/fondohome.png\");\n\r\n\r\nfunction loadHome() {\r\n    const content = document.getElementById(\"content\");\r\n    const cuadro = document.createElement(\"div\");\r\n    const texto = document.createElement(\"div\");\r\n    cuadro.classList.add(\"cuadro\");\r\n    texto.classList.add(\"texto\");\r\n    const imagen = new Image();\r\n    imagen.src = _images_fondohome_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    const titulo = document.createElement(\"h1\");\r\n    const subtitulo = document.createElement(\"h2\");\r\n    const frase1 = document.createElement(\"p\");\r\n    const frase2 = document.createElement(\"p\");\r\n    titulo.textContent = \"Sabor y Sol\";\r\n    subtitulo.textContent = \"La excelencia se sirve en cada plato\";\r\n    frase1.textContent = \"Cocina Peruana y Latina Autentica en el Corazon\";\r\n    frase2.textContent = \"de la Ciudad. Reserca tu mesa hoy\";\r\n\r\n    content.appendChild(cuadro);\r\n    cuadro.appendChild(imagen);\r\n    cuadro.appendChild(texto);\r\n    texto.appendChild(titulo);\r\n    texto.appendChild(subtitulo);\r\n    texto.appendChild(frase1);\r\n    texto.appendChild(frase2);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_restaurant_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/restaurant.svg */ \"./src/images/restaurant.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst encabezado = document.querySelector(\".encabezado\");\r\nconst content = document.getElementById(\"content\");\r\nconst home = document.querySelector(\".home\");\r\nconst menu = document.querySelector(\".menu\");\r\nconst contact = document.querySelector(\".contact\");\r\nconst imagen = new Image();\r\nimagen.src = _images_restaurant_svg__WEBPACK_IMPORTED_MODULE_4__;\r\nencabezado.prepend(imagen);\r\n\r\nfunction clearContent() {\r\n    content.textContent = \"\";\r\n}\r\n\r\nhome.addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n});\r\n\r\nmenu.addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\r\n});\r\n\r\ncontact.addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact)();\r\n});\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _images_ceviche_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/ceviche.jpg */ \"./src/images/ceviche.jpg\");\n/* harmony import */ var _images_anticuchos_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/anticuchos.jpg */ \"./src/images/anticuchos.jpg\");\n/* harmony import */ var _images_papashuancaina_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/papashuancaina.jpg */ \"./src/images/papashuancaina.jpg\");\n/* harmony import */ var _images_roomservice_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/roomservice.svg */ \"./src/images/roomservice.svg\");\n/* harmony import */ var _images_lomosaltado_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/lomosaltado.jpg */ \"./src/images/lomosaltado.jpg\");\n/* harmony import */ var _images_tallarinesverdes_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/tallarinesverdes.jpg */ \"./src/images/tallarinesverdes.jpg\");\n/* harmony import */ var _images_arrozpato_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/arrozpato.jpg */ \"./src/images/arrozpato.jpg\");\n/* harmony import */ var _images_carapulcra_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/carapulcra.jpg */ \"./src/images/carapulcra.jpg\");\n/* harmony import */ var _images_polloalabrasa_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/polloalabrasa.jpg */ \"./src/images/polloalabrasa.jpg\");\n/* harmony import */ var _images_arrozmariscos_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/arrozmariscos.jpg */ \"./src/images/arrozmariscos.jpg\");\n/* harmony import */ var _images_chicha_jpeg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/chicha.jpeg */ \"./src/images/chicha.jpeg\");\n/* harmony import */ var _images_limonada_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/limonada.jpg */ \"./src/images/limonada.jpg\");\n/* harmony import */ var _images_emoliente_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/emoliente.jpg */ \"./src/images/emoliente.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction loadMenu() {\r\n    const container = document.getElementById(\"content\");\r\n    const menu = document.createElement(\"div\");\r\n    menu.classList.add(\"menutablero\");\r\n    const tituloprincipal = document.createElement(\"h1\");\r\n    tituloprincipal.textContent = \"MENU\";\r\n    const entrada = document.createElement(\"h2\");\r\n    entrada.textContent = \"ENTRADA\";\r\n    let funcionentrada = cargarentrada();\r\n    const fondos = document.createElement(\"h2\");\r\n    fondos.textContent = \"FONDOS\";\r\n    let funcionfondos = cargarfondos();\r\n    const postres = document.createElement(\"h2\");\r\n    postres.textContent = \"BEBIDAS\";\r\n    let funcionpostres = cargarpostre();\r\n    container.appendChild(menu);\r\n    menu.appendChild(tituloprincipal);\r\n    menu.appendChild(entrada);\r\n    menu.appendChild(funcionentrada);\r\n    menu.appendChild(fondos);\r\n    menu.appendChild(funcionfondos);\r\n    menu.appendChild(postres);\r\n    menu.appendChild(funcionpostres);\r\n}\r\n\r\nfunction cargarentrada() {\r\n    const carta_entrada = document.createElement(\"div\");\r\n    carta_entrada.classList.add(\"carta_entrada\");\r\n    const entrada1 = document.createElement(\"div\");\r\n    const cevicheimagen = new Image();\r\n    cevicheimagen.src = _images_ceviche_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    const cevichetexto = document.createElement(\"p\");\r\n    cevichetexto.textContent =\r\n        \"El ceviche es uno de los platos más emblemáticos del Perú, preparado con pescado fresco marinado en jugo de limón, acompañado de cebolla roja, ají y cilantro. Su sabor es fresco, cítrico y ligeramente picante, ofreciendo una experiencia única que refleja la riqueza de la gastronomía peruana.\";\r\n\r\n    const pedirentrada1 = document.createElement(\"div\");\r\n    const precio1 = document.createElement(\"p\");\r\n    precio1.textContent = \"S/12\";\r\n    const boton1 = document.createElement(\"button\");\r\n\r\n    const entrada2 = document.createElement(\"div\");\r\n    const anticuchoimagen = new Image();\r\n    anticuchoimagen.src = _images_anticuchos_jpg__WEBPACK_IMPORTED_MODULE_1__;\r\n    const anticuchotexto = document.createElement(\"p\");\r\n    anticuchotexto.textContent =\r\n        \"El anticucho es uno de los platos más emblemáticos de la gastronomía peruana. Consiste en trozos de carne tradicionalmente corazón de res marinados en una mezcla de ají panca, ajo, vinagre y especias, luego ensartados en brochetas y cocinados a la parrilla. Es una receta con raíces históricas que combina tradición y sabor en cada bocado.\";\r\n\r\n    const pedirentrada2 = document.createElement(\"div\");\r\n    const precio2 = document.createElement(\"p\");\r\n    precio2.textContent = \"S/18\";\r\n    const boton2 = document.createElement(\"button\");\r\n\r\n    const entrada3 = document.createElement(\"div\");\r\n    const huancainaimagen = new Image();\r\n    huancainaimagen.src = _images_papashuancaina_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n    const huancainatexto = document.createElement(\"p\");\r\n    huancainatexto.textContent =\r\n        \"La papa a la huancaína es un clásico de la cocina peruana. Consiste en papas cocidas servidas con una cremosa salsa hecha de queso fresco, ají amarillo, leche y galleta, que le da un sabor suave y ligeramente picante. Se suele acompañar con huevo duro, aceitunas y lechuga, combinando tradición y frescura en cada bocado.\";\r\n\r\n    const pedirentrada3 = document.createElement(\"div\");\r\n    const precio3 = document.createElement(\"p\");\r\n    precio3.textContent = \"S/10\";\r\n    const boton3 = document.createElement(\"button\");\r\n\r\n    const totalpedir = [pedirentrada1, pedirentrada2, pedirentrada3];\r\n    totalpedir.forEach((elemento) => elemento.classList.add(\"pedidosentrada\"));\r\n    const totalentradas = [entrada1, entrada2, entrada3];\r\n    totalentradas.forEach((elemento) => elemento.classList.add(\"entradas\"));\r\n    const totalbotones = [boton1, boton2, boton3];\r\n    totalbotones.forEach((elemento) => {\r\n        const img = document.createElement(\"img\");\r\n        img.classList.add(\"iconopedir\");\r\n        img.src = _images_roomservice_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n        elemento.appendChild(img);\r\n    });\r\n    carta_entrada.appendChild(entrada1);\r\n    entrada1.appendChild(cevicheimagen);\r\n    entrada1.appendChild(cevichetexto);\r\n    entrada1.appendChild(pedirentrada1);\r\n    pedirentrada1.appendChild(precio1);\r\n    pedirentrada1.appendChild(boton1);\r\n    carta_entrada.appendChild(entrada2);\r\n    entrada2.appendChild(anticuchoimagen);\r\n    entrada2.appendChild(anticuchotexto);\r\n    entrada2.appendChild(pedirentrada2);\r\n    pedirentrada2.appendChild(precio2);\r\n    pedirentrada2.appendChild(boton2);\r\n    carta_entrada.appendChild(entrada3);\r\n    entrada3.appendChild(huancainaimagen);\r\n    entrada3.appendChild(huancainatexto);\r\n    entrada3.appendChild(pedirentrada3);\r\n    pedirentrada3.appendChild(precio3);\r\n    pedirentrada3.appendChild(boton3);\r\n    return carta_entrada;\r\n}\r\n\r\nfunction cargarfondos() {\r\n    const carta_fondos = document.createElement(\"div\");\r\n    carta_fondos.classList.add(\"cartas_fondos\");\r\n    const fondos1 = document.createElement(\"div\");\r\n    const lomoimagen = new Image();\r\n    lomoimagen.src = _images_lomosaltado_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\n    const lomotexto = document.createElement(\"p\");\r\n    lomotexto.textContent =\r\n        \"Un clásico irresistible que fusiona la tradición peruana con influencias chinas. Tiernos trozos de carne de res salteados al wok con cebolla roja, tomate y un toque de sillao, acompañados de papas fritas crujientes y arroz blanco. Un plato jugoso, intenso y lleno de sabor que conquista desde el primer bocado.\";\r\n\r\n    const pedirfondo1 = document.createElement(\"div\");\r\n    const precio1 = document.createElement(\"p\");\r\n    precio1.textContent = \"S/20\";\r\n    const boton1 = document.createElement(\"button\");\r\n\r\n    const fondos2 = document.createElement(\"div\");\r\n    const tallarinimage = new Image();\r\n    tallarinimage.src = _images_tallarinesverdes_jpg__WEBPACK_IMPORTED_MODULE_5__;\r\n    const tallarintexto = document.createElement(\"p\");\r\n    tallarintexto.textContent =\r\n        \"Una deliciosa fusión de pasta al estilo peruano con una cremosa salsa de albahaca, espinaca y queso, acompañada de un jugoso bistec a la plancha. Un plato vibrante, aromático y lleno de frescura que encanta a todos.\";\r\n\r\n    const pedirfondo2 = document.createElement(\"div\");\r\n    const precio2 = document.createElement(\"p\");\r\n    precio2.textContent = \"S/17\";\r\n    const boton2 = document.createElement(\"button\");\r\n\r\n    const fondos3 = document.createElement(\"div\");\r\n    const patoimagen = new Image();\r\n    patoimagen.src = _images_arrozpato_jpg__WEBPACK_IMPORTED_MODULE_6__;\r\n    const patotexto = document.createElement(\"p\");\r\n    patotexto.textContent =\r\n        \"Un plato emblemático del norte peruano, donde el arroz se impregna de culantro fresco, cerveza negra y especias, logrando un sabor profundo e inolvidable. Acompañado de jugoso pato cocido lentamente, cada porción es una experiencia intensa, aromática y llena de tradición.\";\r\n\r\n    const pedirfondo3 = document.createElement(\"div\");\r\n    const precio3 = document.createElement(\"p\");\r\n    precio3.textContent = \"S/19\";\r\n    const boton3 = document.createElement(\"button\");\r\n\r\n    const fondos4 = document.createElement(\"div\");\r\n    const carapulcraimagen = new Image();\r\n    carapulcraimagen.src = _images_carapulcra_jpg__WEBPACK_IMPORTED_MODULE_7__;\r\n    const carapulcratexto = document.createElement(\"p\");\r\n    carapulcratexto.textContent =\r\n        \"Uno de los platos más antiguos del Perú, preparado con papa seca, carne de cerdo o pollo, maní y ají panca. Su textura espesa y su sabor ahumado lo convierten en una joya de la cocina tradicional, ideal para paladares exigentes.\";\r\n\r\n    const pedirfondo4 = document.createElement(\"div\");\r\n    const precio4 = document.createElement(\"p\");\r\n    precio4.textContent = \"S/15\";\r\n    const boton4 = document.createElement(\"button\");\r\n\r\n    const fondos5 = document.createElement(\"div\");\r\n    const polloimagen = new Image();\r\n    polloimagen.src = _images_polloalabrasa_jpg__WEBPACK_IMPORTED_MODULE_8__;\r\n    const pollotexto = document.createElement(\"p\");\r\n    pollotexto.textContent =\r\n        \"El orgullo de la gastronomía peruana: pollo jugoso marinado con especias secretas y cocido lentamente al carbón. Su piel dorada y crocante contrasta con su interior tierno, acompañado de papas fritas y cremas que elevan cada bocado.\";\r\n\r\n    const pedirfondo5 = document.createElement(\"div\");\r\n    const precio5 = document.createElement(\"p\");\r\n    precio5.textContent = \"S/40\";\r\n    const boton5 = document.createElement(\"button\");\r\n\r\n    const fondos6 = document.createElement(\"div\");\r\n    const mariscoimagen = new Image();\r\n    mariscoimagen.src = _images_arrozmariscos_jpg__WEBPACK_IMPORTED_MODULE_9__;\r\n    const mariscotexto = document.createElement(\"p\");\r\n    mariscotexto.textContent =\r\n        \"Un festín marino lleno de color y sabor, preparado con arroz graneado mezclado con una selección de mariscos frescos, ajíes y especias. Cada cucharada transporta al comensal a la costa peruana, con un equilibrio perfecto entre frescura y sazón.\";\r\n\r\n    const pedirfondo6 = document.createElement(\"div\");\r\n    const precio6 = document.createElement(\"p\");\r\n    precio6.textContent = \"S/18\";\r\n    const boton6 = document.createElement(\"button\");\r\n\r\n    const totalpedir = [pedirfondo1, pedirfondo2, pedirfondo3, pedirfondo4, pedirfondo5, pedirfondo6];\r\n    totalpedir.forEach((elemento) => elemento.classList.add(\"pedidosfondo\"));\r\n    const totalfondos = [fondos1, fondos2, fondos3, fondos4, fondos5, fondos6];\r\n    totalfondos.forEach((elemento) => elemento.classList.add(\"fondos\"));\r\n    const totalbotones = [boton1, boton2, boton3, boton4, boton5, boton6];\r\n    totalbotones.forEach((elemento) => {\r\n        const img = document.createElement(\"img\");\r\n        img.classList.add(\"iconopedir\");\r\n        img.src = _images_roomservice_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n        elemento.appendChild(img);\r\n    });\r\n    carta_fondos.appendChild(fondos1);\r\n    fondos1.appendChild(lomoimagen);\r\n    fondos1.appendChild(lomotexto);\r\n    fondos1.appendChild(pedirfondo1);\r\n    pedirfondo1.appendChild(precio1);\r\n    pedirfondo1.appendChild(boton1);\r\n    carta_fondos.appendChild(fondos2);\r\n    fondos2.appendChild(tallarinimage);\r\n    fondos2.appendChild(tallarintexto);\r\n    fondos2.appendChild(pedirfondo2);\r\n    pedirfondo2.appendChild(precio2);\r\n    pedirfondo2.appendChild(boton2);\r\n    carta_fondos.appendChild(fondos3);\r\n    fondos3.appendChild(patoimagen);\r\n    fondos3.appendChild(patotexto);\r\n    fondos3.appendChild(pedirfondo3);\r\n    pedirfondo3.appendChild(precio3);\r\n    pedirfondo3.appendChild(boton3);\r\n    carta_fondos.appendChild(fondos4);\r\n    fondos4.appendChild(carapulcraimagen);\r\n    fondos4.appendChild(carapulcratexto);\r\n    fondos4.appendChild(pedirfondo4);\r\n    pedirfondo4.appendChild(precio4);\r\n    pedirfondo4.appendChild(boton4);\r\n    carta_fondos.appendChild(fondos5);\r\n    fondos5.appendChild(polloimagen);\r\n    fondos5.appendChild(pollotexto);\r\n    fondos5.appendChild(pedirfondo5);\r\n    pedirfondo5.appendChild(precio5);\r\n    pedirfondo5.appendChild(boton5);\r\n    carta_fondos.appendChild(fondos6);\r\n    fondos6.appendChild(mariscoimagen);\r\n    fondos6.appendChild(mariscotexto);\r\n    fondos6.appendChild(pedirfondo6);\r\n    pedirfondo6.appendChild(precio6);\r\n    pedirfondo6.appendChild(boton6);\r\n    return carta_fondos;\r\n}\r\n\r\nfunction cargarpostre() {\r\n    const carta_postres = document.createElement(\"div\");\r\n    carta_postres.classList.add(\"carta_postres\");\r\n    const postre1 = document.createElement(\"div\");\r\n    const chichaimagen = new Image();\r\n    chichaimagen.src = _images_chicha_jpeg__WEBPACK_IMPORTED_MODULE_10__;\r\n    const chichatexto = document.createElement(\"p\");\r\n    chichatexto.textContent =\r\n        \"Bebida tradicional peruana elaborada con maíz morado hervido con piña, canela y clavo de olor. Refrescante, ligeramente dulce y con un toque especiado que la hace única y muy representativa del Perú.\";\r\n\r\n    const pedirbebida1 = document.createElement(\"div\");\r\n    const precio1 = document.createElement(\"p\");\r\n    precio1.textContent = \"S/12\";\r\n    const boton1 = document.createElement(\"button\");\r\n\r\n    const postre2 = document.createElement(\"div\");\r\n    const limonadaimagen = new Image();\r\n    limonadaimagen.src = _images_limonada_jpg__WEBPACK_IMPORTED_MODULE_11__;\r\n    const limonadatexto = document.createElement(\"p\");\r\n    limonadatexto.textContent =\r\n        \"Refrescante bebida preparada con limón peruano, conocido por su intensidad y aroma. Servida bien fría, es ideal para acompañar cualquier plato por su frescura y acidez equilibrada.\";\r\n    const pedirbebida2 = document.createElement(\"div\");\r\n    const precio2 = document.createElement(\"p\");\r\n    precio2.textContent = \"S/12\";\r\n    const boton2 = document.createElement(\"button\");\r\n\r\n    const postre3 = document.createElement(\"div\");\r\n    const emolienteimagen = new Image();\r\n    emolienteimagen.src = _images_emoliente_jpg__WEBPACK_IMPORTED_MODULE_12__;\r\n    const emolientetexto = document.createElement(\"p\");\r\n    emolientetexto.textContent =\r\n        \"Bebida caliente tradicional preparada con hierbas, cebada y linaza. Reconocida por sus propiedades digestivas y su sabor reconfortante, perfecta para cualquier momento del día.\";\r\n    const pedirbebida3 = document.createElement(\"div\");\r\n    const precio3 = document.createElement(\"p\");\r\n    precio3.textContent = \"S/12\";\r\n    const boton3 = document.createElement(\"button\");\r\n\r\n    const totalbeber = [pedirbebida1, pedirbebida2, pedirbebida3];\r\n    totalbeber.forEach((elemento) => elemento.classList.add(\"pedidosbebida\"));\r\n    const totalpostres = [postre1, postre2, postre3];\r\n    totalpostres.forEach((elemento) => elemento.classList.add(\"postres\"));\r\n    const totalbotones = [boton1, boton2, boton3];\r\n    totalbotones.forEach((elemento) => {\r\n        const img = document.createElement(\"img\");\r\n        img.classList.add(\"iconopedir\");\r\n        img.src = _images_roomservice_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n        elemento.appendChild(img);\r\n    });\r\n    carta_postres.appendChild(postre1);\r\n    postre1.appendChild(chichaimagen);\r\n    postre1.appendChild(chichatexto);\r\n    postre1.appendChild(pedirbebida1);\r\n    pedirbebida1.appendChild(precio1);\r\n    pedirbebida1.appendChild(boton1);\r\n    carta_postres.appendChild(postre2);\r\n    postre2.appendChild(limonadaimagen);\r\n    postre2.appendChild(limonadatexto);\r\n    postre2.appendChild(pedirbebida2);\r\n    pedirbebida2.appendChild(precio2);\r\n    pedirbebida2.appendChild(boton2);\r\n    carta_postres.appendChild(postre3);\r\n    postre3.appendChild(emolienteimagen);\r\n    postre3.appendChild(emolientetexto);\r\n    postre3.appendChild(pedirbebida3);\r\n    pedirbebida3.appendChild(precio3);\r\n    pedirbebida3.appendChild(boton3);\r\n    return carta_postres;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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