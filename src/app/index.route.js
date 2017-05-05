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
      template: "<add-img-ex></add-img-ex>",
      params: {
        obj: null
      }
    })
    .state('home.clientPro',{
      url:'/prograssClient',
      template: "<client-prograss></client-prograss>",
    })
    .state('home.engineH',{
      url:'/engineH',
      template: "<highlight-engine></highlight-engine>",
    })
    .state('home.exList',{
      url:'exList',
      templateUrl: 'app/components/exList/exList.html',
      controller:'ExListController',
      controllerAs: 'vm'
    })
    .state('home.login',{
      url:'login',
      templateUrl: 'app/components/login/login.html',
      controller:'LoginController',
      controllerAs: 'vm'
    })
    .state('home.register',{
      url:'register',
      templateUrl: 'app/components/register/register.html',
      controller:'RegisterController',
      controllerAs: 'vm'
    })
  ;

  $urlRouterProvider.otherwise('/');
}
