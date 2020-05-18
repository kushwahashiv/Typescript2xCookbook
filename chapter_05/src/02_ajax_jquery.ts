namespace chapter_04.ajax_jquery {
  $.ajax({
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