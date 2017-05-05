export function exListDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/exList/exList.html',
    scope: {
      creationDate: '='
    },
    controller: ExListController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

 class ExListController {
  constructor ($stateParams,configapp) {
    'ngInject';
    this.state =
    this.config = configapp;
    this.numArray = [1,2,3,4];
    this.testShetach = this.config.testShetach;
    this.testSikul = this.config.testSikul;
  }

  testShetachClick(){
    this.config.pick=this.testShetach;
    this.config.goToState('home.showEx');

  }

  testSikulClick(){
    this.config.pick=this.testSikul;
    this.config.goToState('home.showEx');

    //this.config.goToStateWithParms('home.showEx', this.testSikul);
  }
}

