self.addEventListener('message', function (e) {
  if (e.data.type === 'SOME_UNIQUE_KEY') {
    const message = {
      type: 'SOME_UNIQUE_KEY',
      details: 'RESPONSE'
    };
    self.postMessage(message, null);
  }
}, false);
