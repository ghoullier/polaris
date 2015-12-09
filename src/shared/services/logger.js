const LEVELS = ['log', 'trace', 'debug', 'info', 'warn', 'error']
let logLevel = 0

export function LoggerProvider() {
  // DDO
  return { setLogLevel, $get }

  // Implementation

  function $get($log) {
    'ngInject'

    // Interface
    const service = {}
    // Enable correct log level
    LEVELS.forEach(function onEachLogLevel(level) {
      service[level] = (LEVELS.indexOf(level) >= logLevel) ? $log[level] : angular.noop
    })
    return service
  }

  function setLogLevel(level) {
    logLevel = LEVELS.indexOf(level)
  }
}

module.exports = LoggerProvider
