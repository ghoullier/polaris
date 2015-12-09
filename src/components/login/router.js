export default ($stateProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'components/login/partials/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
  
}
