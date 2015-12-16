import login from './login'
import register from './register'
import profile from './profile'
import upload from './upload'
import playground from './playground'

import router from './router'

const THIRD_PART_MODULES = ['ui.router', 'mgcrea.ngStrap', 'ngFileUpload']

export default angular
  .module('polaris.components', [
    ...THIRD_PART_MODULES,

    login.name,
    register.name,
    profile.name,
    upload.name,
    playground.name
  ])

  .config(router)
