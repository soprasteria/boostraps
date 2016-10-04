import {Component, Input, OnInit} from "@angular/core";
import {Event, Registration} from "./calendar.elements";
import {CalendarService} from "./calendar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'calendar-row',
  templateUrl: 'app/calendar/calendar.row.component.html'
})
export class CalendarRowComponent implements OnInit {

  @Input() item: Event;
  available: boolean = true;

  constructor(private router: Router, private cService: CalendarService) {
    if (this.item) this.checkAvailability(this.item.registrations);
  };

  ngOnInit(): void {
    this.checkAvailability(this.item.registrations);
  }

  register(evtId) {
    console.log("Subscribe for item " + evtId);
    // Mock here
    // this.cService.register(evtId, localStorage.getItem('account')).then(res => console.log(res));
    this.available = false;
  }

  unregister(evtId) {
    console.log("Subscribe for item " + evtId);
    // Mock here
    // this.cService.unregister(evtId, localStorage.getItem('account')).then(res => console.log(res));
    this.available = true;
  }

  checkAvailability(subscriptions: Registration[]) {
    /*let currentAccountID = localStorage.getItem('account');
    for (let sub of subscriptions) {
      if (sub.id.accountId == currentAccountID) {
        this.available = false;
        break;
      }
    }*/
  }

  notTooLate(evtDate): boolean {
/*    let date = evtDate.split(" ")[0];
     let time = evtDate.split(" ")[1];
     let current: Date;

     // Parse date
     let day: number = date.split("-")[0];
     let month: number = date.split("-")[1];
     let year: number= date.split("-")[2];

     if (time) {
     // Parse time if exist
     let hour: number = time.split(":")[0];
     let minute: number = time.split(":")[1];
     current = new Date(year, month - 1, day, hour, minute);
     } else {
     current = new Date(year, month - 1, day);
     }
     return current.getTime() > Date.now();*/
    return true;
  }
}
