export default ($stateProvider) => {
  'ngInject'

  // Declare routes
  $stateProvider
    .state('groups', {
      url: '/groups',
      templateUrl: 'components/groups/partials/group-list.html',
      controller: 'GroupList as groupList'
    })
    .state('groups.details', {
      url: '/:group',
      templateUrl: 'components/groups/partials/group-details.html',
      controller: 'GroupDetails as groupDetails'
    })

}
