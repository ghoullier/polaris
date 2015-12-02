import RegisterController from './register-controller';

import router from './router';

export default angular
  .module('volunteers.components.register', [
    'ng',

    'ui.router'
  ])

  .controller('RegisterController', RegisterController)

  .config(router)
;
