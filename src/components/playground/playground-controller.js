const MACRO_DEPLOYMENT_ID = 'RXhZ'
const GDA_DEPLOYMENT_ID = 'zFmP'

const gda = new zp.service.Generic(GDA_DEPLOYMENT_ID)
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

    macro.onError(({ channel, data }) => {
      console.log('on', 'macro', 'error', channel, data)
    })
    macro.on('call', ({ channel, data }) => {
      console.log('on', 'macro', 'call', channel, data)
    })
    macro.on('registered', ({ channel, data }) => {
      console.log('on', 'macro', 'registered', channel, data)
      Object.keys(data.errors).forEach(function onEach(property) {
        console.error(data.errors[property])
      })
    })
    macro.on('initialized', ({ channel, data }) => {
      console.log('on', 'macro', 'initialized', channel, data)
    })

    gda.on('list', ({ data, channel }) => {
      console.log('on', 'gda', 'list', data.result.content)
    })
  }
  submit($event) {
    $event.preventDefault()

    const random = Date.now()

    console.log('PlaygroundController::submit')
/*
    macro.send('call', {
      name: 'initialize',
      parameters: {}
    })
*/
/*
    macro.send('call', {
      name: 'registerNewUser',
      parameters: {
        login: `${random}`,
        password: `${random}`
      }
    })
    macro.send('call', {
      name: 'registerNewAdmin',
      parameters: {
        login: `admin-${random}`,
        password: `${random}`
      }
    })
*/

    gda.send('list', {
      table: 'Users',
      columns: [{
        column: 'Details'
      }],
      owner: 'global' // UserId de la personne dont on souhaite voir les données
    })
  }
}
