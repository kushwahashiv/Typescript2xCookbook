(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./arrays", "./collections", "./functions", "./objects", "./utility"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _arrays = require("./arrays");
    var _collections = require("./collections");
    var _functions = require("./functions");
    var _objects = require("./objects");
    var _utility = require("./utility");
    var VERSION = '1.0.0', arrays = _arrays.default, collections = _collections.default, functions = _functions.default, objects = _objects.default, utility = _utility.default;
    exports.VERSION = VERSION;
    exports.arrays = arrays;
    exports.collections = collections;
    exports.functions = functions;
    exports.objects = objects;
    exports.utility = utility;
});
