class Collections {
    each(list, iteratee) {
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            (function (elm, index, lst) {
                iteratee(elm, index, lst);
            })(element, i, list);
        }
        return list;
    }
    filter(list, predicate) {
        const result = [];
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            (function (elm) {
                if (predicate(elm) === true) {
                    result.push(elm);
                }
            })(element);
        }
        return result;
    }
}
export default new Collections();
