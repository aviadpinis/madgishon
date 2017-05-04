/**
 * Created by elishaik on 5/5/17.
 */
export class AuthInterceptor {
  constructor($rootScope, $q, AUTH_EVENTS){
    'ngInject';
    this.$rootScope = $rootScope;
    this.$q = $q;
    this.AUTH_EVENTS = AUTH_EVENTS;


    this.responseError = function (response) {
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
      }[response.status], response);
      return $q.reject(response);
    }

  }
}
