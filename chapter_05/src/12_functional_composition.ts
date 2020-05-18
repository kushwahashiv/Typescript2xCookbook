namespace chapter_04.functional_composition {

  interface IUserProfile {
    name: string,
    surname: string,
    website: string,
    twitter: string
  }

  function getProfileAsync() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/data/user_profile.json',
        async: true,
        method: 'GET',
        dataType: 'json',
        success: function (data: IUserProfile) {
          resolve(data);
        },
        error: function (e) {
          reject(e);
        }
      });
    });
  }

  function generateHTMLAsync(data: IUserProfile) {
    return new Promise((resolve, reject) => {
      const html = `<div>
              <h3>${data.name}</h3>
              <p>${data.name}</p>
              <h3>${data.surname}</h3>
              <p>${data.surname}</p>
              <h3>${data.website}</h3>
              <p>${data.website}</p>
              <h3>${data.twitter}</h3>
              <p>${data.twitter}</p>
            </div>`;
      resolve(html);
    });
  }

  function appendHTMLAsync($container, html: string) {
    return new Promise((resolve, reject) => {
      // const $container = $('#user_account');
      $container.html(html);
      resolve($container);
    });
  }

  // verbose
  getProfileAsync()
    .then(generateHTMLAsync)
    .then(function (html: string) {
      return appendHTMLAsync($('#user_account'), html);
    })
    .catch((e) => {
      console.log(e);
    });

  // functional composition
  const $container = $('#user_account');
  const appendHTMLAsyncToUserAccount = appendHTMLAsync.bind(null, $container);

  getProfileAsync()
    .then(generateHTMLAsync)
    .then(appendHTMLAsyncToUserAccount)
    .catch((e) => {
      console.log(e);
    });
}
