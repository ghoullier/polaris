const ZP_FS_DEPLOYMENT_ID = 'YYXp'
const fs = new zp.service.Generic(ZP_FS_DEPLOYMENT_ID)

export default class UploadController {
  constructor($http, Upload) {
    'ngInject'

    console.log(fs)

    this.file = null

    const that = this

    fs.on('ls', ({ channel, data }) => {
      console.log('on', 'ls', 'error', channel, data)
    })

    fs.on('error', ({ channel, data }) => {
      console.log('on', 'fs', 'error', channel, data)
    })

    fs.on('newFile', ({ channel, data }) => {
      console.log('on', 'fs', 'newFile', channel, data)
    })

    fs.on('newUploadUrl', ({ channel, data }) => {
      console.log('on', 'fs', 'newUploadUrl', channel, data)

      var fd = new FormData()
      fd.append('file', that.file)
      $http({
        url: data.url,
        method: data.httpMethod,
        data: that.file,
        transformRequest: angular.identity,
        headers: {
          'Content-Type': that.file.type
        }
      })
      .then(function(...args) {
          // Send a validation to ZetaPush server
          // You can provide metadata and tags if needed
          console.log('succes', args)
          fs.send('newFile', {
            guid: data.guid
          })
        }, function(error) {
          console.log('Error when uploading file', error)
      })
    })
  }
  submit($event) {
    $event.preventDefault(),

    console.log('UploadController::submit', fs)

    fs.send('newUploadUrl', {})
  }
  transfer(files) {
    console.log('UploadController::transfer', files)

    this.file = files[0]
  }
  ls() {
    console.log('UploadController::ls')

    fs.send('ls', {
      folder: ''
    })
  }
}
