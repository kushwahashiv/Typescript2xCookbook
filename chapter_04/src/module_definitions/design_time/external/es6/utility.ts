import { IUtility } from '../../interfaces';
class Utility implements IUtility {

  // Returns a random integer between min (inclusive) and max (inclusive).
  // If you only pass one argument, it will return a number between 0 and that number.
  // e.g. random(5,10)
  public random(min: number, max?: number) {
    if (typeof max === 'undefined') {
      max = min;
      min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Returns an integer timestamp for the current time.
  // Useful for implementing timing/animation functions.
  // e.g. now()
  public now(): number {
    return new Date().getTime();
  }

}

export default new Utility();
