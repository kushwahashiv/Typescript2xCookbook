import { Foo } from './demo/foo';
import { Bar } from './demo/bar';

function demo() {
    let bar = new Bar();
    let barSaySomethingPromise = bar.barSaySomethingAsync();

    barSaySomethingPromise.then(
        (something) => {
            console.log(something);
        }
    );

    let foo = new Foo();
    let fooSaySomethingPromise = foo.fooSaySomethingAsync();

    fooSaySomethingPromise.then(
        (something) => {
            console.log(something);
        }
    );
}

export { demo };
