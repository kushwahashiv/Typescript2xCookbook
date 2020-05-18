namespace chapter_04.generators_more {

  // helper to run promises in a syncrhonous-like style
  function async(makeGenerator) {
    return function () {
      const generator = makeGenerator.apply(this, arguments);

      function handle(result) {
        // result => { done: [Boolean], value: [Object] }
        if (result.done) return Promise.resolve(result.value);

        return Promise.resolve(result.value).then(function (res) {
          return handle(generator.next(res));
        }, function (err) {
          return handle(generator.throw(err));
        });
      }

      try {
        return handle(generator.next());
      } catch (ex) {
        return Promise.reject(ex);
      }
    }
  }

  interface IUserProfile {
    name: string,
    surname: string,
    website: string,
    twitter: string
  }

  interface IUserFeed {
    update: string,
    date: string
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

  function getFeedAsync(user) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/data/user_feed.json',
        data: {user: user},
        async: true,
        method: 'GET',
        dataType: 'json',
        success: function (data: IUserFeed) {
          resolve(data);
        },
        error: function (e) {
          reject(e);
        }
      });
    });
  }

  const getUserDetails = async(function*() {
    const profile = yield getProfileAsync();
    if (profile.twitter !== null) {
      const feed = yield getFeedAsync(profile.twitter);
      console.log(feed);
    }
  });

  getUserDetails();

}
