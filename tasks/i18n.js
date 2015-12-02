import gulp from 'gulp';

import paths from './utils/paths';

export default () => {
  return gulp.src(paths.sources.i18n)
    .pipe(gulp.dest(paths.dist.i18n))
  ;
};
