import * as Q from 'q';

interface IFoo {
    fooSaySomethingAsync(): Q.Promise<string>;
}

class Foo implements IFoo {
    fooSaySomethingAsync(): Q.Promise<string> {
        return Q.Promise<string>(function (resolve, reject) {
            // Resolve after a random interval
            setTimeout(function () {
                resolve('Foo says something!');
            }, Math.floor(400 + Math.random() * 2000));

        });
    }
}

export { Foo };