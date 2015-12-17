export class ZetaPushController {
  constructor($scope, ...services) {
    console.log('ZetaPushController:constructor', $scope, services)

    this.services = services
    this.errors = []

    this.services.forEach((service) => {
      service.onError(({ channel, data }) => {
        console.log('on', 'service', 'error', channel, data)

        this.errors.push(data)

        $scope.$digest()
      })
    })

    $scope.$on('$destroy', () => {
      this.onDestroy()
    })
  }
  onDestroy() {
    this.services.forEach((service) => {
      service.releaseService()
    })
  }
}
