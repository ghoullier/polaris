export default ($stateProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('playground', {
      url: '/playground',
      templateUrl: 'components/playground/partials/playground.html',
      controller: 'Playground as vm'
    })
  
}
