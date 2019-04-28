System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Arrays;
    return {
        setters: [],
        execute: function () {
            Arrays = (function () {
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
            exports_1("default", new Arrays());
        }
    };
});
