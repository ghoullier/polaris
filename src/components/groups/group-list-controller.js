const MACRO_DEPLOYMENT_ID = 'RXhZ'
const GROUPS_DEPLOYMENT_ID = 'hvxh'

const macro = new zp.service.Generic(MACRO_DEPLOYMENT_ID)
const groups = new zp.service.Generic(GROUPS_DEPLOYMENT_ID)

import { ZetaPushController } from '../../zetapush/controller'

export default class GroupListController extends ZetaPushController {
  constructor($scope) {
    'ngInject'

    super($scope, macro, groups)

    this.model = {}
    this.list = []

    // Subscriptions
    this.on(macro, 'groupCreated', ({ channel, data }) => {
      console.timeEnd('createGroup')
      console.log('on', 'macro', 'groupCreated', channel, data)

      this.model = {}

      const { result: { group } } = data
      const alreadyExist = this.list.find((item) => item.group === group.group)

      if (!alreadyExist) {
        this.list.push(group)
      }

      $scope.$digest()
    })
    this.on(macro, 'groupDeleted', ({ channel, data }) => {
      console.timeEnd('deleteGroup')
      console.log('on', 'macro', 'groupDeleted', channel, data)

      const { result: { group } } = data
      const index = this.list.findIndex((item) => item.group === group.group)

      if (-1 < index) {
        this.list.splice(index, 1)
      }

      $scope.$digest()
    })
    this.on(groups, 'groups', ({ channel, data }) => {
      console.timeEnd('groups')
      console.log('on', 'groups', 'groups', channel, data)

      this.list = data

      $scope.$digest()
    })

    this.listGroups()
  }
  createGroup() {
    console.time('createGroup')

    macro.send('call', {
      name: 'createGroup',
      parameters: this.model,
      hardFail: true
    })
  }
  deleteGroup(group) {
    console.time('deleteGroup')

    macro.send('call', {
      name: 'deleteGroup',
      parameters: { group },
      hardFail: true
    })
  }
  listGroups() {
    console.time('groups')

    const random = Date.now()

    groups.send('groups', {})
  }
  dismissError(error) {

    const index = this.errors.findIndex((item) => item === error)

    if (-1 < index) {
      this.errors.splice(index, 1)
    }
  }
}
