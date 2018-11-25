const FAKE_TOKEN = 'fake-jwt-token';

const setTimeoutPromise = (delay = 0) => {
  return new Promise(_ => setTimeout(_ => resolve(), delay));
}

export function configureFakeBackend() {
  const users = [{
    id: 1,
    username: '김태웅',
    password: 'rlaxodnd',
    firstName: 'Kim',
    lastName: 'Tae-woong'
  }];
  const realFetch = window.fetch;
  window.fetch = (url, opts) => {
    return new Promise((resolve, reject) => {
      switch (true) {
        case url.endsWith('/users/authenticate') && opts.method === 'POST':
          setTimeoutPromise(500)
            .then(_ => {
              //요청 파라메터 JSON Object로 변환 (content-type이 application/json일시를 가정)
              const params = JSON.parse(opts.body);

              const user = users.find(originalUser => originalUser.userName === params.userName && originalUser.password === params.password);

              if (user) {
                resolve({
                  ok: true,
                  body: _ => Promise.resolve(JSON.stringify({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: FAKE_TOKEN
                  }))
                });
              } else {
                // else return error
                reject({
                  ok: false,
                  body: _ => Promise.reject('Username or password is incorrect')
                });
              }
            })
          break;
        case url.endsWith('/users') && opts.method === 'GET':
          // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
          if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
            resolve({
              ok: true,
              body: _ => Promise.resolve(JSON.stringify(users))
            });
          } else {
            // return 401 not authorised if token is null or invalid
            reject({
              ok: false,
              body: _ => Promise.reject('Unauthorised')
            });
          }
          break;
        default:
          realFetch(url, opts).then(response => resolve(response));
      }
    })
  }
}
