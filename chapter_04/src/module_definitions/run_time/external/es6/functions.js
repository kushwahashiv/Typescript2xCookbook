class Functions {
    bind(fn, obj, ...args) {
        return fn.bind(obj, ...args);
    }
    delay(fn, wait, ...args) {
        setTimeout(function () {
            fn(...args);
        }, wait);
    }
}
export default new Functions();
