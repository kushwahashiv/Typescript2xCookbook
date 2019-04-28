import { IFunctions } from '../../interfaces';

class Functions implements IFunctions {
  // Bind a function to an object, meaning that whenever the function
  // is called, the value of this will be the object.
  // e.g.
  // const func = function(greeting){ return greeting + ': ' + this.name }
  // func = bind(func, {name: 'moe'}, 'hi');
  // func();
  public bind(fn: any, obj: any, ...args: any[]): any {
    return fn.bind(obj, ...args);
  }

  // Much like setTimeout, invokes function after wait milliseconds.
  // e.g.
  // const log = bind(console.log, console);
  // delay(log, 1000, 'logged later');
  public delay(fn: any, wait: number, ...args: any[]): void {
    setTimeout(function () {
      fn(...args);
    }, wait);
  }

}

export default new Functions();
