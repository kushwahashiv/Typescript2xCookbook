// Start loading the main app file.
require(['ndrscr', 'jquery'], function (_, $) {

    // This function will be called when all the dependencies
    // listed above are loaded. Note that this function could
    // be called before the page is loaded.
    // This callback is optional.

    // Using Array module
    const result1 = _.arrays.first([5, 4, 3, 2, 1], 3);
    console.log(result1);

    const result2 = _.arrays.last([5, 4, 3, 2, 1], 3);
    console.log(result2);

    // Using collection module
    _.collections.each([5, 4, 3, 2, 1], function (e, i, l) {
        console.log(e, i, l);
    });

    const result3 = _.collections.filter([5, 4, 3, 2, 1], function (e) {
        return (e % 2 === 0);
    });
    console.log(result3);

    // Using function module
    const greet = function (greeting) {
        return greeting + ': ' + this.name
    };
    func = _.functions.bind(greet, {name: 'moe'}, 'hi');
    const result4 = func();
    console.log(result4);

    const Logger = (function () {
        const Logger = function () {
        };
        Logger.prototype.log = function (text) {
            console.log(text);
        };
        return Logger;
    })();
    const logger = new Logger();

    const log = _.functions.bind(logger.log, logger);
    _.functions.delay(log, 1000, 'logged later');

    // Using object module
    const result5 = _.objects.keys({one: 1, two: 2, three: 3});
    console.log(result5);

    const result6 = _.objects.values({one: 1, two: 2, three: 3});
    console.log(result6);

    // Using utility module
    const result7 = _.utility.random(5, 10);
    console.log(result7);

    const result8 = _.utility.now();
    console.log(result8);
});
