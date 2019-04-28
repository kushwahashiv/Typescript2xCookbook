(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ndrscr = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Arrays = (function () {
    function Arrays() {
    }
    Arrays.prototype.first = function (array, n) {
        if (n === void 0) { n = 1; }
        var result = [];
        for (var i = 0; i < n; i++) {
            var value = array[i];
            if (typeof value === 'undefined') {
                return result;
            }
            result.push(array[i]);
        }
        return result;
    };
    Arrays.prototype.last = function (array, n) {
        if (n === void 0) { n = 1; }
        return this.first(array.reverse(), n);
    };
    return Arrays;
}());
exports.default = new Arrays();

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collections = (function () {
    function Collections() {
    }
    Collections.prototype.each = function (list, iteratee) {
        for (var i = 0; i < list.length; i++) {
            var element = list[i];
            (function (elm, index, lst) {
                iteratee(elm, index, lst);
            })(element, i, list);
        }
        return list;
    };
    Collections.prototype.filter = function (list, predicate) {
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
    };
    return Collections;
}());
exports.default = new Collections();

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Functions = (function () {
    function Functions() {
    }
    Functions.prototype.bind = function (fn, obj) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return fn.bind.apply(fn, [obj].concat(args));
    };
    Functions.prototype.delay = function (fn, wait) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        setTimeout(function () {
            fn.apply(void 0, args);
        }, wait);
    };
    return Functions;
}());
exports.default = new Functions();

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = require("./arrays");
exports.arrays = arrays_1.default;
var collections_1 = require("./collections");
exports.collections = collections_1.default;
var functions_1 = require("./functions");
exports.functions = functions_1.default;
var objects_1 = require("./objects");
exports.objects = objects_1.default;
var utility_1 = require("./utility");
exports.utility = utility_1.default;
var VERSION = '1.0.0';
exports.VERSION = VERSION;

},{"./arrays":1,"./collections":2,"./functions":3,"./objects":5,"./utility":6}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Objects = (function () {
    function Objects() {
    }
    Objects.prototype.keys = function (obj) {
        var result = [];
        for (var k in obj) {
            result.push(k);
        }
        return result;
    };
    Objects.prototype.values = function (obj) {
        var result = [];
        for (var k in obj) {
            result.push(obj[k]);
        }
        return result;
    };
    return Objects;
}());
exports.default = new Objects();

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utility = (function () {
    function Utility() {
    }
    Utility.prototype.random = function (min, max) {
        if (typeof max === 'undefined') {
            max = min;
            min = 0;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Utility.prototype.now = function () {
        return new Date().getTime();
    };
    return Utility;
}());
exports.default = new Utility();

},{}]},{},[4])(4)
});