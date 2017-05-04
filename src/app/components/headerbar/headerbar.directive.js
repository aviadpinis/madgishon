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
  constructor (moment,$mdDialog) {
    'ngInject';

    this.mdDialog = $mdDialog;
    // "this.creationDate" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
  }

  openInitDialog(){
    let that = this;
    that.mdDialog.show({
      controller:['$scope', '$mdDialog', function ($scope, $mdDialog) {
        $scope.hide = function () {
          $mdDialog.hide();
        };
        $scope.cancel = function () {
          $mdDialog.cancel();
        };

        $scope.create = function (test) {
          alert(this.test.name)
        };
      }],
      templateUrl: 'app/components/headerbar/initDialog.html',
      // parent: angular.element(document.body),
      clickOutsideToClose: false
    })
  }
}


