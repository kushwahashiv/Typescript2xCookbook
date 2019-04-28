class Objects {
    keys(obj) {
        const result = [];
        for (const k in obj) {
            result.push(k);
        }
        return result;
    }
    values(obj) {
        const result = [];
        for (const k in obj) {
            result.push(obj[k]);
        }
        return result;
    }
}
export default new Objects();
