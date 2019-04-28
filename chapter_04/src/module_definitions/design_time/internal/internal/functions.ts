module ndrscr_with_internal_modules.functions {

  // Bind a function to an object, meaning that whenever the function
  // is called, the value of this will be the object.
  // e.g.
  // var func = function(greeting){ return greeting + ': ' + this.name }
  // func = bind(func, {name: 'moe'}, 'hi');
  // func();
  export function bind(fn: any, obj: any, ...args: any[]): any {
    return fn.bind(obj, ...args);
  }

  // Much like setTimeout, invokes function after wait milliseconds.
  // e.g.
  // var log = bind(console.log, console);
  // delay(log, 1000, 'logged later');
  export function delay(fn: any, wait: number, ...args: any[]): void {
    setTimeout(function () {
      fn(...args);
    }, wait);
  }

}
