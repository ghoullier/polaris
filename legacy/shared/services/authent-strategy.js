const ZP_RESSOURCE_ID = 'ZP-RESSOURCE-ID';
const ZP_TOKEN = 'ZP-TOKEN';

export default class AuthentStrategy {
  isWeakAuthent() {
    return null === this.getToken();
  }
  getToken() {
    return localStorage.getItem(ZP_TOKEN);
  }
  getRessourceId() {
    var id = localStorage.getItem(ZP_RESSOURCE_ID);
    if (null === id) {
      id = zp.makeResourceId();
      localStorage.setItem(ZP_RESSOURCE_ID, id);
    }
    return id;
  }
  connect(service) {
    const token = this.getToken();
    const ressourceId = this.getRessourceId();
    zp.connect(service.getConnectionData(token, ressourceId));
  }
}
