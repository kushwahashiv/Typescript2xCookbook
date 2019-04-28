define(["require", "exports"], function (require, exports) {
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
    var functions = new Functions();
    exports.default = functions;
});
