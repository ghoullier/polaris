import 'babel-polyfill';

import templates from './templates';
import shared from './shared';
import components from './components';
import * as zetapush from './zetapush';

const app = angular
  .module('volunteers', [
    templates.name,
    shared.name,
    components.name
  ])
;

zetapush.initialize(() => {
  angular.bootstrap(document.documentElement, [
    app.name
  ]);
});
