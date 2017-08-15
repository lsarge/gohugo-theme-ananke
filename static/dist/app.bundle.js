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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var registerListener = exports.registerListener = function registerListener(event, func) {
  if (window.addEventListener) {
    window.addEventListener(event, func);
  } else {
    window.attachEvent('on' + event, func);
  }
};

var images = document.querySelectorAll('img[data-src]');

var lazyLoad = exports.lazyLoad = function lazyLoad() {
  for (var i = 0; i < images.length; i++) {
    if (isInViewport(images[i])) {
      if (images[i].getAttribute('data-src')) {
        images[i].src = images[i].getAttribute('data-src');
        images[i].removeAttribute('data-src');
      }
    }
  }
  cleanLazy();
};

var isInViewport = function isInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth);
};

var cleanLazy = function cleanLazy() {
  images = Array.prototype.filter.call(images, function (l) {
    return l.getAttribute('data-src');
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(1);

var _main2 = _interopRequireDefault(_main);

var _lazyLoad = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var img = document.querySelectorAll('img[data-src]');

// NOTE: TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
// var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
// You can also "require" any script from its location in the node modules folder. Webpack often knows what to look for, but you can add a script directly like this:
// var javascriptthingy = require('path/to/folder/file.js');

(0, _lazyLoad.registerListener)('scroll', _lazyLoad.lazyLoad);

(0, _lazyLoad.registerListener)('load', _lazyLoad.lazyLoad);
// registerListener('scroll', lazyLoad);
//
// var lazy = [];
//
// function setLazy(){
//     lazy = document.getElementsByClassName('lazy');
//     console.log('Found ' + lazy.length + ' lazy images');
// }
//
// function lazyLoad(){
//     for(var i=0; i<lazy.length; i++){
//         if(isInViewport(lazy[i])){
//             if (lazy[i].getAttribute('data-src')){
//                 lazy[i].src = lazy[i].getAttribute('data-src');
//                 lazy[i].removeAttribute('data-src');
//             }
//         }
//     }
//
//     cleanLazy();
// }
//
// function cleanLazy(){
//     lazy = Array.prototype.filter.call(lazy, function(l){ return l.getAttribute('data-src');});
// }
//
// function isInViewport(el){
//     var rect = el.getBoundingClientRect();
//
//     return (
//         rect.bottom >= 0 &&
//         rect.right >= 0 &&
//         rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.left <= (window.innerWidth || document.documentElement.clientWidth)
//      );
// }
//
// function registerListener(event, func) {
//     if (window.addEventListener) {
//         window.addEventListener(event, func)
//     } else {
//         window.attachEvent('on' + event, func)
//     }
// }

/***/ })
/******/ ]);