import ProfileController from './profile-controller'

import router from './router'

export default angular
  .module('polaris.components.profile', [
    'ng',

    'ui.router'
  ])

  .controller('ProfileController', ProfileController)

  .config(router)
