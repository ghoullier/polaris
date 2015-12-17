const MACRO_DEPLOYMENT_ID = 'RXhZ'

const macro = new zp.service.Generic(MACRO_DEPLOYMENT_ID)

import { ZetaPushController } from '../../zetapush/controller'

export default class PerformanceController extends ZetaPushController {
  constructor($scope) {
    'ngInject'

    super($scope, macro)

    console.log('PerformanceController:constructor')

    // Subscribe
    macro.on('groupCreated', ({ channel, data }) => {
      console.timeEnd('createGroup')
      console.log('on', 'macro', 'groupCreated', channel, data)
    })

    this.services.push(macro)
  }
  createGroup() {
    console.time('createGroup')

    const random = Date.now()

    macro.send('call', {
      name: 'createGroup',
      parameters: {
        group: `${random}`,
        groupName: `${random}-Group-Name`
      }
    })
  }
}
