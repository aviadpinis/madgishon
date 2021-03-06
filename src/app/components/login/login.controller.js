export class LoginController {
  constructor($scope, AuthService, $state) {
    'ngInject';
    this.$scope = $scope;
    this.AuthService = AuthService;
    this.$state = $state;

    this.userTypes = ["מטפל","מטופל","הורה"];
    this.dyslexiaTypes = [
      "אגנזויה לאותיות",
      "שיכול אותיות - lcd",
      "נגלקט",
      "קישבית",
      "שטח",
      "אימות קריאה"
    ];
  }

  login() {
    this.AuthService.login(this.$scope.user).then(function () {
      this.$state.go('home');
    }, function (errMsg) {
      alert(errMsg);
    });
  }
}

