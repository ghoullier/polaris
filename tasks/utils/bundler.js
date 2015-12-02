import browserify from 'browserify';
import babelify from 'babelify';
import ngAnnotate from 'browserify-ngannotate';

import args from './cli-args';
import paths from './paths';

const entries = paths.sources.entries;
const optimize = args.optimize;

export function app() {
  const bundler = browserify({
      entries: entries.app,
      debug: !optimize,
      verbose: true
    })
    .transform(babelify)
    .transform({
      add: true,
      single_quotes: true
    }, ngAnnotate)
  ;
  if (optimize) {
    bundler.plugin('minifyify', {
      map: false
    });
  }
  return bundler;
}
