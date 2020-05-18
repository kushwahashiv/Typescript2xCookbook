
namespace chapter_04.promises_ajax {

  interface IAjaxOptions {
    url: string,
    async: boolean,
    method: string,
    dataType: string
  }

  function ajaxAsync(options: IAjaxOptions) {
    return new Promise((resolve, reject) => {

      const request = new XMLHttpRequest();
      request.open(options.method, options.url, options.async);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          const data = null;
          if (options.dataType === 'json') {
            const data = JSON.parse(request.responseText);
          }
          resolve(data);
        }
        else {
          // We reached our target server, but it returned an error
          reject(request.responseText);
        }
      };

      request.onerror = (e) => {
        reject(e);
      };

      request.send();

    });

  }

  ajaxAsync({
    url: '/data/countries.json',
    async: true,
    method: 'GET',
    dataType: 'json'
  }).then(function (data) {
    // Success!
    console.log(data);
  }).catch(function (e) {
    // There was a connection error of some sort
    console.log(e);
  });

}