import {UiComponent} from "../commons/ui.component";
import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {CalendarService} from "./calendar.service";
import {LoginService} from "../security/login.service";
import {Event} from "./calendar.elements";

@Component({
  selector: 'event-calendar',
  templateUrl: 'app/calendar/calendar.component.html'
})
export class CalendarComponent extends UiComponent {

  @Input() items: Array<Event>;

  constructor(router: Router, private cService: CalendarService, sLogin: LoginService) {
    super(router, sLogin);
  }

  ngOnInit() {
    super.ngOnInit();
    // this.cService.findAll().then(res => this.items = res);
    // Mock here
    this.items = new Array;
    for (var i = 0; i < 5; i++) {
      let tmp = new Event();
      tmp.date = new Date();
      tmp.title = "Item " + i;
      tmp.participationEndingDate = new Date();
      this.items[i] = tmp;
    }
  }

  isAdmin(): boolean {
    return localStorage.getItem('admin') != null && localStorage.getItem('admin') == 'true';
  }

  goToAdd() {
    this.router.navigate(['/add']);
  }
}
