var ndrscr =
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utility = exports.objects = exports.functions = exports.collections = exports.arrays = exports.VERSION = undefined;

	var _arrays = __webpack_require__(1);

	var _arrays2 = _interopRequireDefault(_arrays);

	var _collections = __webpack_require__(2);

	var _collections2 = _interopRequireDefault(_collections);

	var _functions = __webpack_require__(3);

	var _functions2 = _interopRequireDefault(_functions);

	var _objects = __webpack_require__(4);

	var _objects2 = _interopRequireDefault(_objects);

	var _utility = __webpack_require__(5);

	var _utility2 = _interopRequireDefault(_utility);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VERSION = '1.0.0';
	exports.VERSION = VERSION;
	exports.arrays = _arrays2.default;
	exports.collections = _collections2.default;
	exports.functions = _functions2.default;
	exports.objects = _objects2.default;
	exports.utility = _utility2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Arrays = function () {
	    function Arrays() {
	        _classCallCheck(this, Arrays);
	    }

	    _createClass(Arrays, [{
	        key: 'first',
	        value: function first(array) {
	            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	            var result = [];
	            for (var i = 0; i < n; i++) {
	                var value = array[i];
	                if (typeof value === 'undefined') {
	                    return result;
	                }
	                result.push(array[i]);
	            }
	            return result;
	        }
	    }, {
	        key: 'last',
	        value: function last(array) {
	            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	            return this.first(array.reverse(), n);
	        }
	    }]);

	    return Arrays;
	}();

	exports.default = new Arrays();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Collections = function () {
	    function Collections() {
	        _classCallCheck(this, Collections);
	    }

	    _createClass(Collections, [{
	        key: "each",
	        value: function each(list, iteratee) {
	            for (var i = 0; i < list.length; i++) {
	                var element = list[i];
	                (function (elm, index, lst) {
	                    iteratee(elm, index, lst);
	                })(element, i, list);
	            }
	            return list;
	        }
	    }, {
	        key: "filter",
	        value: function filter(list, predicate) {
	            var result = [];
	            for (var i = 0; i < list.length; i++) {
	                var element = list[i];
	                (function (elm) {
	                    if (predicate(elm) === true) {
	                        result.push(elm);
	                    }
	                })(element);
	            }
	            return result;
	        }
	    }]);

	    return Collections;
	}();

	exports.default = new Collections();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Functions = function () {
	    function Functions() {
	        _classCallCheck(this, Functions);
	    }

	    _createClass(Functions, [{
	        key: "bind",
	        value: function bind(fn, obj) {
	            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                args[_key - 2] = arguments[_key];
	            }

	            return fn.bind.apply(fn, [obj].concat(args));
	        }
	    }, {
	        key: "delay",
	        value: function delay(fn, wait) {
	            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	                args[_key2 - 2] = arguments[_key2];
	            }

	            setTimeout(function () {
	                fn.apply(undefined, args);
	            }, wait);
	        }
	    }]);

	    return Functions;
	}();

	exports.default = new Functions();

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Objects = function () {
	    function Objects() {
	        _classCallCheck(this, Objects);
	    }

	    _createClass(Objects, [{
	        key: "keys",
	        value: function keys(obj) {
	            var result = [];
	            for (var k in obj) {
	                result.push(k);
	            }
	            return result;
	        }
	    }, {
	        key: "values",
	        value: function values(obj) {
	            var result = [];
	            for (var k in obj) {
	                result.push(obj[k]);
	            }
	            return result;
	        }
	    }]);

	    return Objects;
	}();

	exports.default = new Objects();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Utility = function () {
	    function Utility() {
	        _classCallCheck(this, Utility);
	    }

	    _createClass(Utility, [{
	        key: 'random',
	        value: function random(min, max) {
	            if (typeof max === 'undefined') {
	                max = min;
	                min = 0;
	            }
	            return Math.floor(Math.random() * (max - min + 1)) + min;
	        }
	    }, {
	        key: 'now',
	        value: function now() {
	            return new Date().getTime();
	        }
	    }]);

	    return Utility;
	}();

	exports.default = new Utility();

/***/ }
/******/ ]);