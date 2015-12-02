import gulp from 'gulp';
import browserSync from 'browser-sync';
import sequence from 'run-sequence';

import args from './utils/cli-args';
import paths from './utils/paths';

import * as string from './utils/string';
import * as watcher from './utils/watcher';

const reload = browserSync.reload;
const dist = paths.dist;
const sources = paths.sources;
const entries = sources.entries;
const env = args.env || 'dev';
const config = string.compile(paths.sources.config, {
  env: env
});

export function task(callback) {
  sequence(
    ['watch.assets', 'watch.app'],
    callback
  );
}

export function assets() {
  // Watch all application scripts
  gulp.watch([sources.scripts], [
    'lint',
    'checkstyle'
  ]);
  // Watch styles
  gulp.watch([sources.styles], [
    'styles'
  ]);
  // Watch html files
  gulp.watch([entries.html], [
    'html'
  ]);
  // Watch views
  gulp.watch([sources.partials], [
    'templates'
  ]);
  // Watch images
  gulp.watch([sources.images], [
    'images'
  ]);
  // Watch i18n
  gulp.watch([sources.i18n], [
    'i18n'
  ]);
  // Watch config
  gulp.watch([config], [
    'config'
  ]);
  gulp.watch(['./bower.json'], [
    'scripts.vendor'
  ]);
  // Watch for live reload
  gulp.watch([
    dist.root + '*.html',
    dist.scripts + '*.js',
    dist.images + '*.*',
    dist.fonts + '*.*'
  ]).on('change', reload);
}

export function app() {
  // Watch app
  return watcher.app();
}
