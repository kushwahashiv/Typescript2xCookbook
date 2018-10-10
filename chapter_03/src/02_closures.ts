namespace chapter02.closures {

  const counter = (function () {
    let i = 0;

    const counter = {
      next: function () {
        i = i + 1;
        return i;
      },
      prev: function () {
        i = i - 1;
        return i;
      }
    };

    return counter;
  })();

  counter.next(); // 1
  counter.next(); // 2
  counter.next(); // 3
  counter.prev(); // 2
  counter.prev(); // 1	

}