const GROUPS_DEPLOYMENT_ID = 'hvxh'
const groups = new zp.service.Generic(GROUPS_DEPLOYMENT_ID)

export default class LoginController {
  constructor(ZetaPush) {
    'ngInject'

    this.ZetaPush = ZetaPush
    this.simple = new ZetaPush.SimpleAuthent()

    this.user = {
      login: '1450197392534',
      password: '1450197392534'
    }

    groups.onError((message) => {
      console.log('on', 'groups', 'error', message)
    })

    groups.on('groups', ({ channel, data }) => {
      console.log('on', 'groups', 'groups', channel, data)
    })
    groups.on('groupUsers', ({ channel, data }) => {
      console.log('on', 'groups', 'groupUsers', channel, data)
    })
    groups.on('listGrants', ({ channel, data }) => {
      console.log('on', 'groups', 'listGrants', channel, data)
    })
  }
  login($event) {
    $event.preventDefault()

    const disconnectHandler = zp.on('/meta/disconnect', () => {
      console.log('on', 'disconnect')

      zp.off(disconnectHandler)
      this.connect()
    })

    zp.disconnect()
  }
  connect() {
    console.log('on', 'weak', 'disonnected')

    //setTimeout(() => {
      const connectHandler = zp.on('/meta/connected', (...args) => {
        console.log('on', 'connected', args)

        zp.off(connectHandler)
        groups.send('groups', {})
        groups.send('groupUsers', {
          group: 'GroupAccessToMyGda'
        })
        groups.send('listGrants', {
          group: 'GroupAccessToMyGda'
        })
      })

      zp.connect(this.simple.getConnectionData(this.user.login, this.user.password, null), this.ZetaPush.API_URL)
    //}, 0)
  }
}
