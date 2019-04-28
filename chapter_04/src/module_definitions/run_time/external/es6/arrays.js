class Arrays {
    first(array, n = 1) {
        const result = [];
        for (let i = 0; i < n; i++) {
            const value = array[i];
            if (typeof value === 'undefined') {
                return result;
            }
            result.push(array[i]);
        }
        return result;
    }
    last(array, n = 1) {
        return this.first(array.reverse(), n);
    }
}
export default new Arrays();
