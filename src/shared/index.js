import { version as AppVersion } from '../../package'

import EventsEmitter from './services/events-emitter'
import Logger from './services/logger'

import compiler from './config/compiler'
import logger from './config/logger'

export default angular
  .module('polaris.shared', [
    'ng'
  ])
  .constant('AppVersion', AppVersion)
  .constant('EventsEmitter', EventsEmitter)

  .provider('Logger', Logger)

  .config(compiler)
  .config(logger)

  .run((ZetaPush) => {
    'ngInject'

    const { AuthentStrategy } = ZetaPush;

    console.log('AuthentStrategy.isWeakAuthent()', AuthentStrategy.isWeakAuthent())

    if (AuthentStrategy.isWeakAuthent()) {
      zp.connect(new ZetaPush.WeakAuthent())
    }
  })
