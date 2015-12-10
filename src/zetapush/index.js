export const ZP_BUSINESS_ID = '2uMaPJfp'
export const ZP_DEBUG_LEVEL = 'info'
export const ZP_RESSOURCE_ID = 'ZP-RESSOURCE-ID'
export const ZP_TOKEN = 'ZP-TOKEN'
export const ZP_SIMPLE_AUTHENTIFICATION_ID = 'DBdP'
export const ZP_WEAK_AUTHENTIFICATION_ID = 'IXG-'

export class WeakAuthent extends zp.authent.Weak {
  constructor() {
    super(ZP_WEAK_AUTHENTIFICATION_ID)
  }
}
export default class SimpleAuthent extends zp.authent.Simple {
  constructor() {
    super(ZP_SIMPLE_AUTHENTIFICATION_ID)
  }
}
export class AuthentStrategy {
  isWeakAuthent() {
    return null === this.getToken()
  }
  getToken() {
    return localStorage.getItem(ZP_TOKEN)
  }
  getRessourceId() {
    let id = localStorage.getItem(ZP_RESSOURCE_ID)
    if (null === id) {
      id = zp.makeResourceId()
      localStorage.setItem(ZP_RESSOURCE_ID, id)
    }
    return id
  }
  connect(service) {
    const token = this.getToken()
    const ressourceId = this.getRessourceId()
    zp.connect(service.getConnectionData(token, ressourceId))
  }
}
// ZetaPush initialize
export const initialize = (callback) => {
  // Register Handle callback
  let bootstraped = false
  const strategy = new AuthentStrategy()
  const weak = new WeakAuthent()
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
  })
  // Initialization of ZetaPush connection with a log level parameter
  zp.init(ZP_BUSINESS_ID, ZP_DEBUG_LEVEL)
  // Auto connection
  if (strategy.isWeakAuthent()) {
    strategy.connect(weak)
  }
}
