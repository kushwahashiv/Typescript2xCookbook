import * as Promise from '@types/bluebird'
namespace chapter_04.multiple_consumers {

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

  function renderMenuBar(profilePromise) {
    profilePromise.then((data: IUserProfile) => {
      $('#user_name').html(data.name);
    }).catch((e) => {
      console.log(e);
    });
  }

  function renderAccountPage(profilePromise) {
    profilePromise.then((data: IUserProfile) => {
      $('#user_name').html(data.name);
      $('#user_surname').html(data.surname);
      $('#user_website').html(data.website);
      $('#user_twitter').html(data.twitter);
    }).catch((e) => {
      console.log(e);
    });
  }

  const profilePromise = getProfileAsync();
  renderMenuBar(profilePromise);
  renderAccountPage(profilePromise);
}
