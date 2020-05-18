namespace chapter_04.callback_ajax {

  interface IAjaxOptions {
    url: string,
    async: boolean,
    method: string,
    dataType: string,
    success: (data: any) => void,
    error: (error: any) => void
  }

  function ajax(options: IAjaxOptions) {
    const request = new XMLHttpRequest();
    request.open(options.method, options.url, options.async);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        let data = null;
        if (options.dataType === 'json') {
          data = JSON.parse(request.responseText);
        }
        options.success(data);
      }
      else {
        // We reached our target server, but it returned an error
        options.error(request.responseText);
      }
    };

    request.onerror = options.error;
    request.send();
  }

  ajax({
    url: '/data/countries.json',
    async: true,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      // Success!
      console.log(data);
    },
    error: function (e) {
      // There was a connection error of some sort
      console.log(e);
    }
  });

}