import LoginController from './login-controller';

import router from './router';

export default angular
  .module('volunteers.components.login', [
    'ng',

    'ui.router'
  ])

  .controller('LoginController', LoginController)

  .config(router)
;
