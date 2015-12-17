import GroupListController from './group-list-controller'
import GroupDetailsController from './group-details-controller'

import router from './router'

export default angular
  .module('polaris.components.groups', [
    'ui.router'
  ])

  .controller('GroupList', GroupListController)
  .controller('GroupDetails', GroupDetailsController)

  .config(router)
