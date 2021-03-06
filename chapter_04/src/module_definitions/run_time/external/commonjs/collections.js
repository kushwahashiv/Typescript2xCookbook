"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collections = (function () {
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
exports.default = new Collections();
