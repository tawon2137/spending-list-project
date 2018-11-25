
const config = {
  apiUrl: 'localhost:8080'
}

class UserService {

  static create() {
    return new UserService();
  }


  login(userName, password) {
    const requestOption = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ userName, password })
    }

    return fetch(`${config.apiUrl}/user/authenticate`, requestOption)
            .then(handleResponse)
            .then(user => {
              if(user.token) {
                localStorage.setItem('user', JSON.stringify(user));
              }

              return user;
            });
  }


  logout() {
    //localStorage에 저장한 인증토큰 삭제
    localStorage.removeItem('user');
  }

  getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
  }


  handleResponse(response) {
    return response.body().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
  }
}

export const userService = UserService.create();
