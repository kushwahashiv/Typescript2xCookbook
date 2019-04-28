System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Objects;
    return {
        setters: [],
        execute: function () {
            Objects = (function () {
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
            exports_1("default", new Objects());
        }
    };
});
