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
      this.useCredentials(token);
    }
  }

  storeUserCredentials(token) {
    window.localStorage.setItem(this.LOCAL_TOKEN_KEY, token);
    this.useCredentials(token);
  }

  useCredentials(token) {
    this.isAuthenticated = true;
    this.authToken = token;

    // Set the token as header for your requests!
    this.$http.defaults.headers.common.Authorization = this.authToken;
  }

  destroyUserCredentials() {
    this.authToken = undefined;
    this.isAuthenticated = false;
    this.$http.defaults.headers.common.Authorization = undefined;
    window.localStorage.removeItem(this.LOCAL_TOKEN_KEY);
  }

  register(user) {
    return this.$q(function (resolve, reject) {
      this.$http.post(this.API_ENDPOINT.url + '/signup', user).then(function (result) {
        if (result.data.success) {
          resolve(result.data.msg);
        } else {
          reject(result.data.msg);
        }
      });
    });
  }

  login(user) {
    return this.$q(function (resolve, reject) {
      this.$http.post(this.API_ENDPOINT.url + '/authenticate', user).then(function (result) {
        if (result.data.success) {
          this.storeUserCredentials(result.data.token);
          resolve(result.data.msg);
        } else {
          reject(result.data.msg);
        }
      });
    });
  }

  logout() {
    this.destroyUserCredentials();
  }

  /*isAuthenticated(){
    return this.isAuthenticated;
  }*/
}
