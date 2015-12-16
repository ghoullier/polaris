import 'babel-polyfill'

import templates from './templates'
import shared from './shared'
import components from './components'
import * as ZetaPush from './zetapush'

const app = angular
  .module('polaris', [
    templates.name,
    shared.name,
    components.name
  ])
  .constant('ZetaPush', ZetaPush)

ZetaPush.initialize(() => {
  angular.bootstrap(document.documentElement, [
    app.name
  ])
})
