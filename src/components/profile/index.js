import ProfileController from './profile-controller';

import router from './router';

export default angular
  .module('volunteers.components.profile', [
    'ng',

    'ui.router'
  ])

  .controller('ProfileController', ProfileController)

  .config(router)
;
