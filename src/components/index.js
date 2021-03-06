import login from './login';
import register from './register';
import profile from './profile';
import upload from './upload';

import router from './router';

const THIRD_PART_MODULES = ['mgcrea.ngStrap', 'ngFileUpload'];

export default angular
  .module('volunteers.components', [
    ...THIRD_PART_MODULES,

    login.name,
    register.name,
    profile.name,
    upload.name
  ])

  .config(router)
;
