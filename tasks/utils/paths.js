export default {
  sources: {
    root: './src/',
    bower: './bower.json',
    config: './config/config-{{env}}.json',
    entries: {
      app: './src/app.js',
      config: './src/config.js',
      vendor: './src/vendor.js',
      html: './src/index.html'
    },
    scripts: './src/{shared,components}/**/*.js',
    styles: './src/{shared,components}/**/*.scss',
    i18n: './src/assets/i18n/*.json',
    images: './src/assets/images/**/*.{png,svg,jpg}',
    fonts: './src/assets/fonts/**',
    partials: './src/{shared,components}/**/*.html'
  },
  dist: {
    root: './dist/',
    scripts: './dist/js/',
    styles: './dist/css/',
    images: './dist/css/images/',
    fonts: './dist/fonts/',
    i18n: './dist/i18n/'
  }
};
