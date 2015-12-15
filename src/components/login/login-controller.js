export default class LoginController {
  constructor($log, ZetaPush) {
    'ngInject'

    this.simple = new ZetaPush.SimpleAuthent()

    this.user = {
      login: '1449753112254',
      password: '1449753112254'
    }

    const handler = zp.on('/meta/disconnect', () => {
      this.connect()
    })
    console.log(handler)
  }
  login($event) {
    $event.preventDefault()

    zp.disconnect()
  }
  connect() {
    console.log('on', 'weak', 'disonnected')

    setTimeout(() => {
      zp.connect(this.simple.getConnectionData(this.user.login, this.user.password, null))
    }, 100)
  }
}
