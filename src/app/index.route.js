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
      templateUrl: '',
      controller:''
  })
  ;

  $urlRouterProvider.otherwise('/');
}
