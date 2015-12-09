const ZP_FS_DEPLOYMENT_ID = 'YYXp'
const fs = new zp.service.Generic(ZP_FS_DEPLOYMENT_ID)

export default class UploadController {
  constructor($http, Upload) {
    'ngInject'

    console.log(fs)

    this.file = null

    const that = this

    fs.on('error', ({ channel, data }) => {
      console.log('on', 'fs', 'error', channel, data)
    })

    fs.on('newFile', ({ channel, data }) => {
      console.log('on', 'fs', 'newFile', channel, data)
    })

    fs.on('newUploadUrl', ({ channel, data }) => {
      console.log('on', 'fs', 'newUploadUrl', channel, data)
debugger
      Upload.upload({
            url: data.url,
            data: {
              file: that.file
            }
        }).then((resp) => {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data)
            fs.send('newFile', {
              guid: data.guid
            })
        }, (resp) => {
            console.log('Error status: ' + resp.status)
        }, (evt) => {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total)
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name)
        })
/*
      $http({
  			url: data.url,
  			method: data.httpMethod,
  			data: that.file,
  			contentType: that.file.type,
  			processData: false
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
*/
    })
  }
  submit($event) {
    $event.preventDefault(),

    console.log('UploadController::submit', fs)

    fs.send('newUploadUrl', {})
  }
  transfer(files) {
    console.log('UploadController::transfer', files)
debugger
    this.file = files[0]
  }
}
