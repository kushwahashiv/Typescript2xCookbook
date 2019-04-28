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
