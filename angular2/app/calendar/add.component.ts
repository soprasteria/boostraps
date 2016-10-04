import { Component } from '@angular/core';
import { Event } from './calendar.elements';

@Component({
  selector: 'add-component',
  templateUrl: 'app/calendar/add.component.html'
})
export class AddComponent {

  active = true;
  event: Event = new Event();

  submitted = false;
  onSubmit() {
    console.log('event saveed');
    this.submitted = true;
  }
}

