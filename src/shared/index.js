import { version as AppVersion } from '../../package';

import EventsEmitter from './services/events-emitter';
import SimpleAuthent from './services/simple-authent';
import WeakAuthent from './services/weak-authent';
import AuthentStrategy from './services/authent-strategy';
import Logger from './services/logger';

import compiler from './config/compiler';
import logger from './config/logger';

export default angular
  .module('volunteers.shared', [
    'ng'
  ])
  .constant('AppVersion', AppVersion)
  .constant('EventsEmitter', EventsEmitter)

  .service('SimpleAuthent', SimpleAuthent)
  .service('WeakAuthent', WeakAuthent)
  .service('AuthentStrategy', AuthentStrategy)

  .provider('Logger', Logger)

  .config(compiler)
  .config(logger)

  .run((AuthentStrategy, WeakAuthent) => {
    'ngInject';

    console.log('AuthentStrategy.isWeakAuthent()', AuthentStrategy.isWeakAuthent());

    if (AuthentStrategy.isWeakAuthent()) {
      zp.connect(WeakAuthent);
    }
  })
;
