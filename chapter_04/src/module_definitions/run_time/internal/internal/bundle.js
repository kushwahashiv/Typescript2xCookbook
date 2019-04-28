var ndrscr_with_internal_modules;
(function (ndrscr_with_internal_modules) {
    var arrays;
    (function (arrays) {
        function first(array, n) {
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
        }
        arrays.first = first;
        function last(array, n) {
            if (n === void 0) { n = 1; }
            return first(array.reverse(), n);
        }
        arrays.last = last;
    })(arrays = ndrscr_with_internal_modules.arrays || (ndrscr_with_internal_modules.arrays = {}));
})(ndrscr_with_internal_modules || (ndrscr_with_internal_modules = {}));
var ndrscr_with_internal_modules;
(function (ndrscr_with_internal_modules) {
    var collections;
    (function (collections) {
        function each(list, iteratee) {
            for (var i = 0; i < list.length; i++) {
                var element = list[i];
                (function (elm, index, lst) {
                    iteratee(elm, index, lst);
                })(element, i, list);
            }
            return list;
        }
        collections.each = each;
        function filter(list, predicate) {
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
        }
        collections.filter = filter;
    })(collections = ndrscr_with_internal_modules.collections || (ndrscr_with_internal_modules.collections = {}));
})(ndrscr_with_internal_modules || (ndrscr_with_internal_modules = {}));
var ndrscr_with_internal_modules;
(function (ndrscr_with_internal_modules) {
    var functions;
    (function (functions) {
        function bind(fn, obj) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return fn.bind.apply(fn, [obj].concat(args));
        }
        functions.bind = bind;
        function delay(fn, wait) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            setTimeout(function () {
                fn.apply(void 0, args);
            }, wait);
        }
        functions.delay = delay;
    })(functions = ndrscr_with_internal_modules.functions || (ndrscr_with_internal_modules.functions = {}));
})(ndrscr_with_internal_modules || (ndrscr_with_internal_modules = {}));
var ndrscr_with_internal_modules;
(function (ndrscr_with_internal_modules) {
    ndrscr_with_internal_modules.VERSION = '1.0.0';
})(ndrscr_with_internal_modules || (ndrscr_with_internal_modules = {}));
var ndrscr_with_internal_modules;
(function (ndrscr_with_internal_modules) {
    var objects;
    (function (objects) {
        function keys(obj) {
            var result = [];
            for (var k in obj) {
                result.push(k);
            }
            return result;
        }
        objects.keys = keys;
        function values(obj) {
            var result = [];
            for (var k in obj) {
                result.push(obj[k]);
            }
            return result;
        }
        objects.values = values;
    })(objects = ndrscr_with_internal_modules.objects || (ndrscr_with_internal_modules.objects = {}));
})(ndrscr_with_internal_modules || (ndrscr_with_internal_modules = {}));
var ndrscr_with_internal_modules;
(function (ndrscr_with_internal_modules) {
    var utility;
    (function (utility) {
        function random(min, max) {
            if (typeof max === 'undefined') {
                max = min;
                min = 0;
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        utility.random = random;
        function now() {
            return new Date().getTime();
        }
        utility.now = now;
    })(utility = ndrscr_with_internal_modules.utility || (ndrscr_with_internal_modules.utility = {}));
})(ndrscr_with_internal_modules || (ndrscr_with_internal_modules = {}));
