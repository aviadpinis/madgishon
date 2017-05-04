export function ClientPrograssDirective(malarkey) {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
        extraValues: '='
    },
    template: '&nbsp;',
    link: linkFunc,
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
