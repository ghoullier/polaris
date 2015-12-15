import PlaygroundController from './playground-controller'

import router from './router'

export default angular
  .module('polaris.components.playground', [
    'ui.router'
  ])

  .controller('Playground', PlaygroundController)

  .config(router)
