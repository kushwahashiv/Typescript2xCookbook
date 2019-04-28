(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
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
});
