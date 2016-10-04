import {Headers} from "@angular/http";
import {Router} from "@angular/router";
export class UiService {

  // Default headers
  protected headers = new Headers({'Content-Type': 'application/json'});

  constructor(private router: Router) {}

  // Error management
  protected handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    localStorage.clear();
    this.router.navigate(['']);
    return Promise.reject(error.message || error);
  }
}

// URLs
const ROOT_URL: string = "http://localhost:8080";
// const ROOT_URL: string = "http://172.30.97.218:18080";
export const LOGIN_URL: string = ROOT_URL + "/session";
export const EVENTS_URL: string = ROOT_URL + "/api/items";
export const EVENT_URL: string = ROOT_URL + "/api/event/";
