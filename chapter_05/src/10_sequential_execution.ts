namespace chapter_04.sequential_execution {
  const files = [
    '/data/countries.json',
    '/data/user_profile.json'
  ];

  function loadFile(file) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: file,
        async: true,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
          resolve(data);
        },
        error: function (e) {
          reject(e);
        }
      });
    });
  }

  function runSequence(array, callback) {
    return new Promise((resolve, reject) => {
      const results = [];

      function chain(array, index) {
        if (index === array.length) return resolve(results);
        Promise.resolve(callback(array[index]))
          .then((content) => {
            results.push({success: true, result: content});
            chain(array, index + 1);
          })
          .catch((e) => {
            results.push({success: false, result: e});
            chain(array, index + 1);
          });
      }

      chain(array, 0);
    });
  }

  runSequence(files, loadFile).then((contents) => {
    console.log(contents);
  });

}
