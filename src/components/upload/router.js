export default ($stateProvider) => {
  'ngInject';

  // Declare routes
  $stateProvider
    .state('upload', {
      url: '/upload',
      templateUrl: 'components/upload/partials/upload.html',
      controller: 'UploadController',
      controllerAs: 'upload'
    })
  ;
};
