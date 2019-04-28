export interface IArrays {
  first<T>(array: Array<T>, n?): Array<T>;
  last<T>(array: Array<T>, n?): Array<T>;
}

export interface ICollections {
  each<T>(list: Array<T>, iteratee: (element: T, index, list: Array<T>) => void): Array<T>;
  filter<T>(list: Array<T>, predicate: (element: T) => boolean): Array<T>;
}

export interface IFunctions {
  bind(fn: any, object: any, ...args: any[]): any;
  delay(fn: any, wait: number, ...args: any[]): void;
}

export interface IObjects {
  keys(obj: Object): Array<string>;
  values(obj: Object): Array<any>;
}

export interface IUtility {
  random(min: number, max?: number);
  now(): number;
}
