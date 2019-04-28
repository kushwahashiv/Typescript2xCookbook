System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Collections;
    return {
        setters: [],
        execute: function () {
            Collections = (function () {
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
            exports_1("default", new Collections());
        }
    };
});
