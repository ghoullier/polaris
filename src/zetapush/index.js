const DEBUG_LEVEL = 'info'
const RESSOURCE_ID = 'ZP-RESSOURCE-ID'
const TOKEN = 'ZP-TOKEN'

export const API_URL = '//vm-zbo:8080/zbo/pub/business/'
export const BUSINESS_ID = 'wEW9Tneu'
export const SIMPLE_AUTHENTIFICATION_BUSINESS_ID = 'ukQT'
export const WEAK_AUTHENTIFICATION_BUSINESS_ID = 'oKd4'
export const FILESYSTEM_BUSINESS_ID = 'tmoO'

export class WeakAuthent extends zp.authent.Weak {
  constructor() {
    super(WEAK_AUTHENTIFICATION_BUSINESS_ID)
  }
}
export class SimpleAuthent extends zp.authent.Simple {
  constructor() {
    super(SIMPLE_AUTHENTIFICATION_BUSINESS_ID)
  }
}
export class AuthentStrategy {
  static isWeakAuthent() {
    return null === this.getToken()
  }
  static setToken(token) {
    return localStorage.setItem(TOKEN, token)
  }
  static getToken() {
    return localStorage.getItem(TOKEN)
  }
  static getRessourceId() {
    let id = localStorage.getItem(RESSOURCE_ID)
    if (null === id) {
      id = zp.makeResourceId()
      localStorage.setItem(RESSOURCE_ID, id)
    }
    return id
  }
  static connect(service) {
    const token = this.getToken()
    const ressourceId = this.getRessourceId()
    zp.connect(service.getConnectionData(token, ressourceId), API_URL)
  }
}
// ZetaPush initialize
export const initialize = (callback) => {
  // Initialization of ZetaPush connection with a log level parameter
  // ZetaPush MUST be initialized before service creation
  zp.init(BUSINESS_ID, DEBUG_LEVEL)
  // Register Handle callback
  let bootstraped = false
  const weak = new WeakAuthent()
  const simple = new SimpleAuthent()
  // ZetaPush Event Handlers
  zp.onHandshake((data) => {
    console.log('on', 'zp', 'handshake', data)
    if (!bootstraped) {
      callback()
    }
    bootstraped = true
  })
  zp.onConnected((data) => {
    console.log('on', 'zp', 'connected', data)

    AuthentStrategy.setToken(simple.getToken())
  })
  // Auto connection
  if (AuthentStrategy.isWeakAuthent()) {
    AuthentStrategy.connect(weak)
  } else {
    AuthentStrategy.connect(simple)
  }
  window.simple = simple
  window.weak = weak
}
