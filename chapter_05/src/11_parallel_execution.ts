namespace chapter_04.parallel_execution {

  const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('promise 1 wins!');
    }, 200);
  });

  const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('promise 2 wins!');
    }, 100);
  });

  const promise3 = Promise.resolve('result');
  const promise4 = Promise.reject('error');

  Promise.all([promise1, promise2, promise3]).then((...results) => {
    console.log(results);
  });

  Promise.all([promise1, promise2, promise3, promise4]).then((...results) => {
    console.log(results);
  }).catch(function (e) {
    console.log(e);
  });

  Promise.race([promise1, promise2]).then((r) => {
    console.log(r);
  });

}
