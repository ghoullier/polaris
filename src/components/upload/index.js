import UploadController from './upload-controller'

import router from './router'

export default angular
  .module('polaris.components.upload', [
    'ng',

    'ui.router'
  ])

  .controller('UploadController', UploadController)

  .config(router)
