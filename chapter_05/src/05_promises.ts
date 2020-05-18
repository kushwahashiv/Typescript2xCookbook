import * as Promise from 'bluebird';

namespace chapter_04.promises {
  function doSomethingAsync() {
    return new Promise((resolve, reject) => {
      console.log('do something...');
      resolve();
    });
  }

  const done = function () {
    console.log('done!');
  };

  const error = function () {
    console.log('error!');
  };

  doSomethingAsync().then(done).catch(error);

  doSomethingAsync().then(function () {
    console.log('done!');
  }).catch(function () {
    console.log('error!');
  });
}
