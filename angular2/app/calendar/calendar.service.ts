import {UiService, EVENTS_URL, EVENT_URL} from "../commons/ui.service";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Event} from "./calendar.elements";
import {SecurityUtils} from "../security/utils";
import {User} from "../security/security.elements"
import {Router} from "@angular/router";

@Injectable()
export class CalendarService extends UiService {

  constructor(private http: Http, router: Router) {
    super(router);
  };

  findAll(): Promise<Event[]> {
    return this.http
      .get(EVENTS_URL, SecurityUtils.tokenBasedAuthentication())
      .toPromise()
      .then(res => this.processResponse(res))
      .catch(this.handleError);
  }

  findOne(eventId: string): Promise<Event> {
    return this.http
      .get(EVENT_URL + eventId, SecurityUtils.tokenBasedAuthentication())
      .toPromise()
      .then(res => this.processResponse(res))
      .catch(this.handleError);
  }

  findWinners(eventId: string): Promise<User[]> {
    return this.http
      .get(EVENT_URL + eventId + '/winners', SecurityUtils.tokenBasedAuthentication())
      .toPromise()
      .then(res => this.processResponse(res))
      .catch(this.handleError);
  }

  register(eventId: string, accountId: string): Promise<string> {
    let headers = SecurityUtils.tokenHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(EVENT_URL + eventId + '?action=register', accountId, { headers: headers })
      .toPromise()
      .then(res => this.processResponse(res))
      .catch(this.handleError);
  }

  validate(eventId: string): Promise<string> {
    let headers = SecurityUtils.tokenHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(EVENT_URL + eventId + '?action=validate', "", { headers: headers })
      .toPromise()
      .then(res => this.processResponse(res))
      .catch(this.handleError);
  }

  unregister(eventId: string, accountId: string): Promise<string> {
    let headers = SecurityUtils.tokenHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(EVENT_URL + eventId + '?action=unregister', accountId, { headers: headers })
      .toPromise()
      .then(res => this.processResponse(res))
      .catch(this.handleError);
  }

  processResponse(res) {
    console.log(res);
    console.log(res.json());
    return res.json();
  }
}
