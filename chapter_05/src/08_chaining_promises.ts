namespace chapter_04.chaining_promises {

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

  function appendHTMLAsync(html: string) {
    return new Promise((resolve, reject) => {
      const $container = $('#user_account');
      $container.html(html);
      resolve($container);
    });
  }

  getProfileAsync()
    .then(generateHTMLAsync)
    .then(appendHTMLAsync)
    .catch((e) => {
      console.log(e);
    });

}
