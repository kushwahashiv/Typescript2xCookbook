namespace chapter_04.generators {
  // count to 10
  function* count() {
    let count = 0;
    while (count < 10) {
      yield count;
      count = count + 1;
    }
  }

  console.log('iterator:');
  const iterator = count();
  let item = null;
  do {
    item = iterator.next();
    console.log(item);
  }
  while (item.done === false);

  // infinite loop with genertors
  function* infiniteCount() {
    let count = 0;
    while (true) {
      yield count;
      count = count + 1;
    }
  }

  console.log('infiniteIterator:');
  const infiniteIterator = infiniteCount();
  console.log(infiniteIterator.next());
  console.log(infiniteIterator.next());
  console.log(infiniteIterator.next());
  console.log(infiniteIterator.next());

}
