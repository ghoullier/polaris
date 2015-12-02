import fs from 'fs';

import paths from './paths';
import args from './cli-args';

import * as string from './string';

const { env = ['dev'] } = args;
let target = [].concat(env);
target = target[target.length - 1];

const configPath = string.compile(paths.sources.config, {
  env: target
});

export default function () {
  var config = fs.readFileSync(configPath, 'utf8');
  return JSON.parse(config);
}
