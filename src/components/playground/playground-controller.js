const MACRO_DEPLOYMENT_ID = 'RXhZ'
const macro = new zp.service.Generic(MACRO_DEPLOYMENT_ID)

export default class PlaygroundController {
  constructor() {
    'ngInject'

    const random = Date.now()

    this.profile = {
      login: `${random}`,
      email: `${random}@random.fr`,
      password: `${random}`,
      firstName: `Prénom`,
      lastName: `Nom`
    }

    macro.onError((message) => {
      console.log('on', 'macro', 'error', message)
    })
    macro.on('call', (message) => {
      console.log('on', 'macro', 'call', message)
    })
    macro.on('registered', (message) => {
      console.log('on', 'macro', 'registered', message)
      Object.keys(message.data.errors).forEach(function onEach(property) {
        console.error(message.data.errors[property])
      })
    })
  }
  submit($event) {
    $event.preventDefault()

    console.log('PlaygroundController::submit')

    macro.send('call', {
      name: 'test_makeUser',
      parameters: this.profile
    })
  }
}
