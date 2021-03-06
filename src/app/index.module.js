/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { HeaderbarDirective } from './components/headerbar/headerbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import {ConfigApp} from './components/config/appconfig.services';
// import { ShowImageExController } from '../app/components/imageEx/showImageEx.controller'
import { addImgExDirective } from '../app/components/addImgEx/addImgEx.directive';
import { ClientPrograssDirective } from '../app/components/clientprograss/clientprograss.directive';
import { HighlightEngineDirective } from '../app/components/HighlightEngine/highlightEngine.directive';
import { showImageExDirective } from '../app/components/showImageEx/showImageEx.directive';
import { exListDirective } from '../app/components/exList/exList.directive';
import { AuthService } from '../app/components/auth/auth.service';
import { AuthInterceptor } from '../app/components/auth/authInterceptor.service';
import { LoginController } from '../app/components/login/login.controller';
import { RegisterController } from '../app/components/register/register.controller';
import { AlfaBetaDirective } from '../app/components/alfaBeta/alfaBeta.directive';

angular.module('highlightMe', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr','chart.js'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated'
  })
  .constant('API_ENDPOINT', {
    url: 'http://localhost:3001/api'
    //  For a simulator use: url: 'http://127.0.0.1:8080/api'
  })
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('configapp', ConfigApp)
  .service('AuthService', AuthService)
  .service('AuthInterceptor', AuthInterceptor)
  .controller('MainController', MainController)
  // .controller('ShowImageExController', ShowImageExController)
  .directive('exListDirective', exListDirective)
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .directive('headerbar', HeaderbarDirective)
  .directive('highlightEngine', HighlightEngineDirective)
  .directive('clientPrograss', ClientPrograssDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('addImgEx', addImgExDirective)
  .directive('alfaBeta', AlfaBetaDirective)
  .directive('showImageEx', showImageExDirective);


