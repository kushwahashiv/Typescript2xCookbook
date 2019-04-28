System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Utility;
    return {
        setters: [],
        execute: function () {
            Utility = (function () {
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
            exports_1("default", new Utility());
        }
    };
});
