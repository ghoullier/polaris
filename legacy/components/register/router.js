export default ($stateProvider) => {
  'ngInject';

  // Declare routes
  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: 'components/register/partials/register.html',
      controller: 'RegisterController',
      controllerAs: 'register'
    })
  ;
};
