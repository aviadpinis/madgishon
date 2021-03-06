export function HeaderbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/headerbar/headerbar.html',
    scope: {
      creationDate: '='
    },
    controller: HeaderbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class HeaderbarController {
  constructor (moment,$mdDialog,configapp,$state) {
    'ngInject';

    this.mdDialog = $mdDialog;
    this.config = configapp;
    // "this.creationDate" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
    this.state = $state;
  }

  openInitDialog(){
    let that = this;
    that.test = that.mdDialog.show({
      controller:['$scope', '$mdDialog', function ($scope, $mdDialog) {
        $scope.dyslexia = that.config.dyslexia;
        $scope.hide = function () {
          $mdDialog.hide();
        };
        $scope.cancel = function () {
          $mdDialog.cancel();
        };

        $scope.create = function () {
          $mdDialog.hide();
          // that.test = this.test;
          that.config.goToStateWithParms("home.createEx",this.test)
        };
      }],
      templateUrl: 'app/components/headerbar/initDialog.html',
      parent: angular.element(document.body),
      clickOutsideToClose: false
    })
  }

}


