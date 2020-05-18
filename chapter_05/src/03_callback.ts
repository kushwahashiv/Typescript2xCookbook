namespace chapter_04.callback {

  function doSomething(callback: () => void) {
    console.log('do something...');
    callback();
  }

  const callback = function () {
    console.log('called back!');
  };

  doSomething(callback);

  doSomething(function () {
    console.log('called back!');
  });

}
