import * as Q from 'q';

interface IBar {
  barSaySomethingAsync(): Q.Promise<string>;
}

class Bar implements IBar {
  barSaySomethingAsync(): Q.Promise<string> {
    return Q.Promise<string>(function (resolve, reject) {
      // Resolve after a random interval
      setTimeout(function () {
        resolve('Bar says something!');
      }, Math.floor(400 + Math.random() * 2000));

    });
  }
}

export { Bar };
