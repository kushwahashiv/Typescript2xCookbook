import _arrays = require('./arrays');
import _collections = require('./collections');
import _functions = require('./functions');
import _objects = require('./objects');
import _utility = require('./utility');

// This library was created for learning purposes and is named ndrscr because
// it is based on underscore.js (http://underscorejs.org/). The library
// contains a few modules (arrays, collections, functions, objects & utility).
const VERSION = '1.0.0',
  arrays = _arrays.default,
  collections = _collections.default,
  functions = _functions.default,
  objects = _objects.default,
  utility = _utility.default

export { VERSION, arrays, collections, functions, objects, utility };
