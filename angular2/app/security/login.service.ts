import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {UiService, LOGIN_URL} from "../commons/ui.service";
import {User, Credentials} from "./security.elements";
import {Router} from "@angular/router";

@Injectable()
export class LoginService extends UiService {

  constructor(private http: Http, router: Router) {
    super(router);
  };

  login(user: string, pwd: string): Promise<User> {
    var creds: Credentials = new Credentials();
    creds.username = user;
    creds.password = pwd;

    return this.http
      .post(LOGIN_URL + '?action=init', JSON.stringify(creds), {headers: this.headers})
      .toPromise()
        // Mock here
      .then(res => {
        var account = new User();
        account.userName = user;
        account.token = "token"
        account.accountId = 1;
        account.fullName = "John Doe";
        account.admin = true;
        return account;
      })
      .catch(this.handleError);
  }

  check(user: string, token: string): Promise<string> {
    var creds: Credentials = new Credentials();
    creds.username = user;
    creds.token = token;

    return this.http
      .post(LOGIN_URL + '?action=check', JSON.stringify(creds), {headers: this.headers})
      .toPromise()
      .then(res => "OK")
      .catch(this.handleError);
  }


  processResponse(res) {
    console.log(res);
    console.log(res.json());
    return res.json();
  }
}
