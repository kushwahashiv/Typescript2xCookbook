const worker = new Worker('/src/task.js');

worker.addEventListener('message', function (e) {
  console.log('Worker said: ', e.data);
}, false);

const message = {
  type: 'SOME_UNIQUE_KEY',
  details: 'REQUEST'
};

worker.postMessage(message);
