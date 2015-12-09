const ZP_MACRO_DEPLOYMENT_ID = 'hgkJ'
const macro = new zp.service.Generic(ZP_MACRO_DEPLOYMENT_ID)

export default class RegisterController {
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

    console.log('RegisterController::submit')

    macro.send('call', {
      name: 'registerUser',
      parameters: this.profile
    })
  }
}
