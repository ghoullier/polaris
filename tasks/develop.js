import browserSync from 'browser-sync';
import fs from 'fs';
import url from 'url';

import paths from './utils/paths';

export default () => {
  browserSync({
    server: {
      baseDir: paths.dist.root,
      middleware: [PushStateMiddleware]
    }
  });
};

/**
 * Middelware that support pushState
 */
function PushStateMiddleware(request, response, next) {
  var pathname = paths.dist.root + url.parse(request.url).pathname;
  fs.exists(pathname, function onExists(exists) {
    if (!exists) {
      request.url = '/index.html';
    }
    return next();
  });
}
