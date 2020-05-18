namespace chapter_04.chaining_promises_more {

  Promise.resolve('step-1-result').then(
    function step2(preiousResult) {
      console.log(`step 2 args: ${preiousResult}`);
      return 'step-2-result';
    }
  ).then(
    function step3(preiousResult) {
      console.log(`step 3 args: ${preiousResult}`);
      // no return
    }
  ).then(
    function step4(preiousResult) {
      console.log(`step 4 args: ${preiousResult}`);
      return Promise.resolve('step-4-result');
    }
  ).then(
    function step5(preiousResult) {
      console.log(`step 5 args: ${preiousResult}`);
    }
  );

}
