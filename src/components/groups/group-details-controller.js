const MACRO_DEPLOYMENT_ID = 'RXhZ'
const GROUPS_DEPLOYMENT_ID = 'hvxh'

const macro = new zp.service.Generic(MACRO_DEPLOYMENT_ID)
const groups = new zp.service.Generic(GROUPS_DEPLOYMENT_ID)

import { ZetaPushController } from '../../zetapush/controller'

export default class GroupDetailsController extends ZetaPushController {
  constructor($scope, $stateParams) {
    'ngInject'

    super($scope, macro, groups)

    this.$stateParams = $stateParams
    this.model = {}
    this.users = []

    this.on(groups, 'groupUsers', ({ channel, data }) => {
      console.timeEnd('groupUsers')
      console.log('on', 'groups', 'groupUsers', channel, data)

      this.model = data
    })

    this.on(macro, 'getAllUsers', ({ channel, data }) => {
      console.timeEnd('getAllUsers')
      console.log('on', 'macro', 'getAllUsers', channel, data)

      const { result: { users } } = data
      this.users = users.result.content
    })

    this.on(macro, 'userAddedInGroup', ({ channel, data }) => {
      console.timeEnd('addUserInGroup')
      console.log('on', 'macro', 'addUserInGroup', channel, data)

      this.getGroupDetails()
    })

    this.getGroupDetails()
  }
  deleteUser(user) {

  }
  getGroupDetails() {
    console.time('groupUsers')
    groups.send('groupUsers', {
      group: this.$stateParams.group,
      hardFail: true
    })
  }
  getAllUsers() {
    console.time('getAllUsers')
    macro.send('call', {
      name: 'getAllUsers',
      parameters: {
        group: this.$stateParams.group
      },
      hardFail: true
    })
  }
  addUserInGroup(user) {
    console.time('addUserInGroup')
    macro.send('call', {
      name: 'addUserInGroup',
      parameters: {
        group: this.$stateParams.group,
        user: user.zetapushKey
      },
      hardFail: true
    })
  }
}
