var ZP_AUTHENTIFICATION_DEPLOYMENT_ID = 'DBdP';
window.simple = new zp.authent.Simple(ZP_AUTHENTIFICATION_DEPLOYMENT_ID);

zp.onConnected(function onConnected(message) {
  console.log('onConnected', message);
});

export default class LoginController {
  constructor($log) {
    'ngInject';

    this.$log = $log;

    this.user = {
      login: '1447327434788',
      password: '1447327434788'
    };

    const handler = zp.on('/meta/disconnect', () => {
      this.connect();
    });
    console.log(handler);
  }
  login($event) {
    $event.preventDefault();

    zp.disconnect();
  }
  connect() {
    console.log('on', 'weak', 'disonnected');

    zp.connect(simple.getConnectionData(this.user.login, this.user.password, null));
  }
}
