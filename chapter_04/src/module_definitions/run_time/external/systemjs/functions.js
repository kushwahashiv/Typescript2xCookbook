System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Functions, functions;
    return {
        setters: [],
        execute: function () {
            Functions = (function () {
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
            functions = new Functions();
            exports_1("default", functions);
        }
    };
});
