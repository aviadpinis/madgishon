export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('home.createEx',{
      url:'/createex',
      templateUrl: 'app/components/imageEx/showImageEx.html',
      controller:'ShowImageExController',
      controllerAs: 'vm'
  })
  ;

  $urlRouterProvider.otherwise('/');
}
