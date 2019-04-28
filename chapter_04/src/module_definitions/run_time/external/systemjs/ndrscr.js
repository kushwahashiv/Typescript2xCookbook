System.register(["./arrays", "./collections", "./functions", "./objects", "./utility"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _arrays, _collections, _functions, _objects, _utility, VERSION, arrays, collections, functions, objects, utility;
    return {
        setters: [
            function (_arrays_1) {
                _arrays = _arrays_1;
            },
            function (_collections_1) {
                _collections = _collections_1;
            },
            function (_functions_1) {
                _functions = _functions_1;
            },
            function (_objects_1) {
                _objects = _objects_1;
            },
            function (_utility_1) {
                _utility = _utility_1;
            }
        ],
        execute: function () {
            VERSION = '1.0.0', arrays = _arrays.default, collections = _collections.default, functions = _functions.default, objects = _objects.default, utility = _utility.default;
            exports_1("VERSION", VERSION);
            exports_1("arrays", arrays);
            exports_1("collections", collections);
            exports_1("functions", functions);
            exports_1("objects", objects);
            exports_1("utility", utility);
        }
    };
});
