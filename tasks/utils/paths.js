const BASE_CONFIG_PATH = './config/'
const BASE_SOURCE_PATH = './src/'
const BASE_DIST_PATH = './dist/'

export default {
  sources: {
    root: `${BASE_SOURCE_PATH}`,
    bower: `./bower.json`,
    config: `${BASE_CONFIG_PATH}config-{{env}}.json`,
    entries: {
      app: `${BASE_SOURCE_PATH}app.js`,
      config: `${BASE_SOURCE_PATH}config.js`,
      vendor: `${BASE_SOURCE_PATH}vendor.js`,
      html: `${BASE_SOURCE_PATH}index.html`
    },
    scripts: `${BASE_SOURCE_PATH}{components,shared}/**/*.js`,
    styles: `${BASE_SOURCE_PATH}{components,shared}/**/styles/main.scss`,
    images: `${BASE_SOURCE_PATH}assets/images/**/*.png`,
    fonts: `${BASE_SOURCE_PATH}assets/fonts/**`,
    partials: `${BASE_SOURCE_PATH}{components,shared}/**/*.html`
  },
  dist: {
    root: `${BASE_DIST_PATH}`,
    scripts: `${BASE_DIST_PATH}js/`,
    styles: `${BASE_DIST_PATH}css/`,
    images: `${BASE_DIST_PATH}css/images/`,
    fonts: `${BASE_DIST_PATH}fonts/`
  }
};
