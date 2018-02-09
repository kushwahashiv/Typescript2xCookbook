# About this example
This example will help you to create an automated build
using Gulp and multiple plugins. This will help you
to improve your productivity and allow your development
team to work using the workflow even if they use
different operating systems or IDEs.

The application code, which is located under the source
directory is not a real world application. It is just
a demonstration of how to consume both third party libraries
and the application's modules.

# How to run the example?

Open a console and clone the following Git repository:

```
$ git clone https://github.com/kushwahashiv/TypescriptCookbook.git
```

Navigate to the `chapter_01` folder:

```
$ cd TypescriptCookbook/chapter_01
```

Install node modules:

```
$ npm install
```

Run one of the gulp tasks:

```
$ gulp          // runs lint + bundle + dist + clean
$ gulp lint     // lints typescript code
$ gulp bundle   // build + bundle + compress typescript code
$ gulp dist     // move contents to be deployed to dist folder
$ gulp clean    // deletes temporal folders
$ gulp serve    // runs web server
$ gulp document // generates documentation
```

# Run the application in a web browser

```
$ gulp serve
```

Navigate to (if not open automatically by gulp):

```
http://localhost:8000/browser/index.html
```

You should see the following in the browser's console:

```
Bar says something!
Foo says something!
```

# Run the application in Node.js

Run the following command:

```
$ node ./node/index.js
```

You should see the following in the console:

```
Bar says something!
Foo says something!
```
