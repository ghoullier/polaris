import LoginController from './login-controller'

import router from './router'

export default angular
  .module('polaris.components.login', [
    'ng',

    'ui.router'
  ])

  .controller('LoginController', LoginController)

  .config(router)
