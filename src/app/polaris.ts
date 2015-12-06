import { Component } from 'angular2/core';


@Component({
  selector: 'polaris-app',
  providers: [],
  templateUrl: 'app/polaris.html',
  directives: [],
  pipes: []
})
export class PolarisApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
