export class AuthService {
  constructor($q, $http, API_ENDPOINT) {
    'ngInject';

    this.$q = $q;
    this.$http = $http;

    this.LOCAL_TOKEN_KEY = 'yourTokenKey';
    this.isAuthenticated = false;
    this.authToken;
    this.API_ENDPOINT = API_ENDPOINT;

    this.loadUserCredentials();
  }

  loadUserCredentials() {
    var token = window.localStorage.getItem(this.LOCAL_TOKEN_KEY);
    if (token) {
      useCredentials(token);
    }
  }

  storeUserCredentials(token) {
    window.localStorage.setItem(this.LOCAL_TOKEN_KEY, token);
    useCredentials(token);
  }

  useCredentials(token) {
    this.isAuthenticated = true;
    this.authToken = token;

    // Set the token as header for your requests!
    $http.defaults.headers.common.Authorization = this.authToken;
  }

  destroyUserCredentials() {
    this.authToken = undefined;
    this.isAuthenticated = false;
    $http.defaults.headers.common.Authorization = undefined;
    window.localStorage.removeItem(this.LOCAL_TOKEN_KEY);
  }

  register(user) {
    return $q(function (resolve, reject) {
      $http.post(this.API_ENDPOINT.url + '/signup', user).then(function (result) {
        if (result.data.success) {
          resolve(result.data.msg);
        } else {
          reject(result.data.msg);
        }
      });
    });
  };

  login(user) {
    return $q(function (resolve, reject) {
      $http.post(this.API_ENDPOINT.url + '/authenticate', user).then(function (result) {
        if (result.data.success) {
          storeUserCredentials(result.data.token);
          resolve(result.data.msg);
        } else {
          reject(result.data.msg);
        }
      });
    });
  };

  logout() {
    destroyUserCredentials();
  };

  isAuthenticated(){
    return this.isAuthenticated;
  }
}
