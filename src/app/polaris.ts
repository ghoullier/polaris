import { Component, ViewEncapsulation } from 'angular2/core';
import { RouteConfig, Router, RouterOutlet, RouterLink, Location } from 'angular2/router';
import { APP_ROUTES } from './routes.config';


@Component({
  selector: 'polaris-app',
  providers: [],
  templateUrl: 'app/polaris.html',
  directives: [ RouterOutlet, RouterLink ],
  pipes: [],
  encapsulation: ViewEncapsulation.None
})
@RouteConfig(APP_ROUTES)
export class PolarisApp {
  defaultMeaning: number = 42;

  constructor(private router: Router, private location: Location) {
    router.navigate(['/Login']);
  }

  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
