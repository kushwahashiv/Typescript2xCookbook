# About this example
This chapter contains over 20 recipes that will help you to
master asynchronous programming.

# How to run the example?

Open a console and clone the following Git repository:

```
$ git clone https://github.com/kushwahashiv/Typescript2xCookbook.git
```

Navigate to the `chapter_04` folder:

```
$ cd TypescriptCookbook/chapter_04
```

Install node modules:

```
$ npm install
```

Run one of the gulp tasks:

```
$ gulp          // invokes 'bundle' task
$ gulp lint     // lints typescript code
$ gulp bundle   // lint + build typescript code
$ gulp serve    // runs web server
```

# Run the application in a web browser

```
$ gulp serve
```

Navigate to (if not opened automatically by gulp):

```
http://localhost:8000/browser/index.html
```

Use the select input to see the TypeScript code and JavaScript
code of each of the examples in chapter 04.

# Run the application in Node.js

```
$ node ./src/16_async_await.ts
```
