/* global malarkey:false, moment:false */

import { config } from './index.config';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { kendoDropDownNgBind } from './kendo-drop-down-ng-bind/kendoDropDownNgBind.directive';

angular.module('kendoDropdownNgBind', ['kendo.directives'])
  .config(config)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('kendoDropDownNgBind', kendoDropDownNgBind);
