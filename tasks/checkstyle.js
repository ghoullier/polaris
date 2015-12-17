import gulp from 'gulp'
import jscs from 'gulp-jscs'
import plumber from 'gulp-plumber'

import paths from './utils/paths'
import { onGenericError } from './utils/handlers'

export default () => {
  var files = [
    paths.sources.scripts,
    '!' + paths.root + 'templates.js',
    '!' + paths.sources.entries.config
  ]
  return gulp.src(files)
    // Catch errors
    .pipe(plumber({
      errorHandler: onGenericError
    }))
    // Check Style
    .pipe(jscs())

}
