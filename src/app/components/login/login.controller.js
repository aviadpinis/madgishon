export class LoginController {
  constructor($scope, AuthService, $state) {
    'ngInject';
    this.$scope = $scope;
    this.AuthService = AuthService;
    this.$state = $state;
  }

  login() {
    AuthService.login($scope.user).then(function (msg) {
      $state.go('inside');
    }, function (errMsg) {
      alert(errMsg);
    });
  }
}

