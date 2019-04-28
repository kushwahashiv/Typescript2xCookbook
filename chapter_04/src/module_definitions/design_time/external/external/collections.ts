import { ICollections } from '../../interfaces';

class Collections implements ICollections {
  // Iterates over a list of elements
  // e.g. each([5,4,3,2,1], function(e,i,l){ console.log(e,i,l); })
  public each<T>(list: Array<T>, iteratee: (element: T, index, list: Array<T>) => void): Array<T> {
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      (function (elm, index, lst) {
        iteratee(elm, index, lst);
      })(element, i, list);
    }
    return list;
  }

  // Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
  // e.g. filter([5, 4, 3, 2, 1], function(e) { return (e % 2 === 0); })
  public filter<T>(list: Array<T>, predicate: (element: T) => boolean): Array<T> {
    const result: Array<T> = [];
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      (function (elm: T) {
        if (predicate(elm) === true) {
          result.push(elm);
        }
      })(element);
    }
    return result;
  }

}

export default new Collections();
