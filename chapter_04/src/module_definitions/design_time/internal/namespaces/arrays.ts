namespace ndrscr_with_namespaces.arrays {

  // Returns the first element of an array. Passing n will return the first n elements of the array.
  // e.g. first([5, 4, 3, 2, 1], 3)
  export function first<T>(array: Array<T>, n = 1): Array<T> {
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

  // Returns the last element of an array. Passing n will return the last n elements of the array.
  // e.g. last([5, 4, 3, 2, 1], 3)
  export function last<T>(array: Array<T>, n = 1): Array<T> {
    return first(array.reverse(), n);
  }

}
