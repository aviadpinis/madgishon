export function ClientPrograssDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
        extraValues: '='
    },
    template: '&nbsp;',
    controller: ClientPrograssController,
    controllerAs: 'vm'
  };

  return directive;
}

class ClientPrograssController {
  constructor () {
    'ngInject';
  }
}
