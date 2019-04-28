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
});
