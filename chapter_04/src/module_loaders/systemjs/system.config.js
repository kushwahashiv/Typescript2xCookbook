// Set our baseURL reference path
System.config({
  baseURL: '../../src/module_definitions/run_time/external',
  packages: {
    'systemjs': {
      map: {
        './systemjs/arrays' : 'arrays.js',
        './systemjs/collections' : 'collections.js',
        './systemjs/functions' : 'functions.js',
        './systemjs/objects' : 'objects.js',
        './systemjs/utility' : 'utility.js'
      }
    }
  }
});
