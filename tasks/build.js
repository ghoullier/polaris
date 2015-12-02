import sequence from 'run-sequence';

export default (callback) => {
  sequence(
    'clean',
    'config',
    'templates',
    ['i18n', 'images', 'styles', 'fonts', 'html', 'lint', 'checkstyle', 'scripts'],
    callback
  );
};
