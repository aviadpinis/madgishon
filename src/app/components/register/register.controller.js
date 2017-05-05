export class RegisterController {
  constructor($scope, AuthService, $state) {
    'ngInject';
    this.$scope = $scope;
    this.AuthService = AuthService;
    this.$state = $state;

    this.$scope.user = {
      name: '',
      password: ''
    };

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

  signup() {
    this.AuthService.register(this.$scope.user).then(function(msg) {
      this.$state.go('home.login');
      alert("Registered!");
    }, function(errMsg) {
      alert('Register failed!');
      });
  }
}
