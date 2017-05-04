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
import { ShowImageExController } from '../app/components/imageEx/showImageEx.controller'
import { addImgExDirective } from '../app/components/addImgEx/addImgEx.directive';

angular.module('highlightMe', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('configapp', ConfigApp)
  .controller('MainController', MainController)
  .controller('ShowImageExController', ShowImageExController)
  .directive('headerbar', HeaderbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('addImgEx', addImgExDirective);

