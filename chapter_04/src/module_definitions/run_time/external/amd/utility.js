define(["require", "exports"], function (require, exports) {
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
});
