export default ($stateProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('profile', {
      url: '/profile',
      templateUrl: 'components/profile/partials/profile.html',
      controller: 'ProfileController',
      controllerAs: 'profile'
    })
  
}
