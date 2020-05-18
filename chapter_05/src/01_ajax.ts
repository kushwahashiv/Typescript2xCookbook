namespace chapter_04.ajax {
  const async = true;
  const url = '/data/countries.json';
  const request = new XMLHttpRequest();
  request.open('GET', url, async);
  
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      const data = JSON.parse(request.responseText);
      console.log(data);
    } else {
      // We reached our target server, but it returned an error
      console.log(request.responseText);
    }
  };
  
  request.onerror = function(e) {
    // There was a connection error of some sort
    console.log(e);
  };
  
  request.send();
}