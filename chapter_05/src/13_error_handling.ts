namespace chapter_04.error_handling {

  function resolvedAsync() {
    return new Promise((resolve, reject) => {
      resolve('Result!');
    });
  }

  function rejectAsync() {
    return new Promise((resolve, reject) => {
      reject('reject!');
    });
  }

  function errorAsync() {
    return new Promise((resolve, reject) => {
      throw new Error('Error!');
    });
  }

  // promises with unhandled exceptions are catched and rejected
  errorAsync().then((r) => {
    console.log(r);
  }).catch((e) => {
    console.log(e);
  });

  // rejections ans errors are propagated through promise chains
  errorAsync().then(resolvedAsync)
    .then(rejectAsync)
    .catch((e) => {
      console.log(e);
    });

  errorAsync().then(resolvedAsync)
    .then(errorAsync)
    .catch((e) => {
      console.log(e);
    });

  errorAsync().then(resolvedAsync)
    .then(errorAsync)
    .catch((e) => {
      // do not re-throw error
    })
    .then(() => {
      // simulates finally block
    });

}
