const MACRO_DEPLOYMENT_ID = 'RXhZ'
const GROUPS_DEPLOYMENT_ID = 'hvxh'

const macro = new zp.service.Generic(MACRO_DEPLOYMENT_ID)
const groups = new zp.service.Generic(GROUPS_DEPLOYMENT_ID)

import { ZetaPushController } from '../../zetapush/controller'

export default class GroupDetailsController extends ZetaPushController {
  constructor($scope, $stateParams) {
    'ngInject'

    super($scope, macro, groups)

    this.model = {}

    groups.on('groupUsers', ({ channel, data }) => {
      console.timeEnd('groupUsers')
      console.log('on', 'groups', 'groupUsers', channel, data)

      this.model = data

      $scope.$digest()
    })

    console.time('groupUsers')
    groups.send('groupUsers', {
      group: $stateParams.group
    })
  }
  deleteUser(user) {

  }
}
