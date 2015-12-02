var ZP_GDA_DEPLOYMENT_ID = '2rCg';
const gda = new zp.service.Generic(ZP_GDA_DEPLOYMENT_ID);

export default class ProfileController {
  constructor($scope) {
    'ngInject';

/*
  'birthdate': new Date(),
  'birthplace': 'Rennes',
  //'gender': 'M',
  'address': '14, rue Frédéric Sacher',
  'zipcode': '35000',
  'city': 'Rennes',
  //'country': 'France',
  'homenumber': '02 99 45 34 26',
  'phonenumber': '06 78 89 90 09',
  'job': 'Pro',
  //'wearsize': 'M',
  'diet': 'Vegan'
*/

    this.model = {};

    gda.onError(({ data, channel }) => {
      console.error('on', 'gda', 'error', data);
    });
    gda.on('get', ({ data, channel }) => {
      console.log('on', 'gda', 'get', data.result);

      this.model = data.result.Profile;

      $scope.$digest();
    });
    gda.on('put', ({ data, channel }) => {
      console.log('on', 'gda', 'put', data);
    });
    gda.on('list', ({ data, channel }) => {
      console.log('on', 'gda', 'list', data.result.content);
    });
  }
  submit($event) {
    $event.preventDefault();

    console.log('ProfileController::submit', $event);

    const random = Date.now();
/*
    gda.send('put', {
      table: 'User',            // REQUIRED -- Table name
      column: 'Profile',        // REQUIRED -- Column name inside the row
      key: `key--${random}`,    // REQUIRED -- Row key
      key2: `Key2--${random}`,  // OPTIONAL -- Cell key inside the column name
      data: {                   // REQUIRED -- Stored data
        [random]: `${random}`
      }
    });
*/
    gda.send('put', {
      table: 'User',
      column: 'Profile',
      key: `Model`,
      data: this.model
    });
  }
  list() {
    console.log('ProfileController::list');
    gda.send('list', {
      table: 'User',
      page: {
        pageNumber: 0,
        pageSize: 10
      },
      columns: ['Profile']
    });
  }
  get() {
    console.log('ProfileController::get');
    gda.send('get', {
      table: 'User',
      key: `Model`
    });
  }
}
