import {Component} from 'angular2/core';


@Component({
  selector: 'volunteers-app',
  providers: [],
  templateUrl: 'app/volunteers.html',
  directives: [],
  pipes: []
})
export class VolunteersApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
