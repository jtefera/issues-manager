/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("'use strict';\n\nself.addEventListener('install', function (event) {\n    // pre cache a load of stuff:\n    event.waitUntil(caches.open('myapp-static-v1').then(function (cache) {\n        return cache.addAll(['/', '/js/bundle.js', '/css/style.css']);\n    }));\n});\n\nself.addEventListener('fetch', function (event) {\n    console.log(event.request);\n    event.respondWith(caches.match(event.request).then(function (cachedResponse) {\n        return cachedResponse || fetch(event.request);\n    }));\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./sources/js/serviceWorker/sw.js\n// module id = 0\n// module chunks = 1\n//# sourceURL=webpack:///./sources/js/serviceWorker/sw.js?");

/***/ }
/******/ ]);