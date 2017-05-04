export function runBlock ($rootScope, $state, AuthService, AUTH_EVENTS) {
  'ngInject';
  //this.$rootScope = $rootScope;
  //this.$state = $state;
  //this.AuthService = AuthService;

  var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
    /*if (!AuthService.isAuthenticated) {
      if (next.name !== 'outside.login' && next.name !== 'outside.register') {
        event.preventDefault();
        $state.go('outside.login');
      }
    }*/
  });
  $rootScope.$on('$destroy', stateChangeStart)
}
