import {Component} from "@angular/core";
import {UiComponent} from "../commons/ui.component";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {User} from "./security.elements";

@Component({
  selector: 'login-ui',
  templateUrl: 'app/security/login.component.html'
})
export class LoginComponent {

  public username: string;
  public password: string;
  public authentKO: boolean = false;
  buttonLabel: string = 'Login';
  working: boolean = false;

  constructor(private router: Router, private sLogin: LoginService) {}

  login(user: string, pwd: string) {
    this.buttonLabel = 'Connexion...';
    this.working = true;

    // this.sLogin.login(user, pwd).then(creds => this.storeSession(creds)).catch(() => this.failedLogin());
    // Mock here
    var account = new User();
    account.userName = user;
    account.token = "token"
    account.accountId = 1;
    account.fullName = "John Doe";
    account.admin = true;
    this.storeSession(account);

  }

  storeSession(creds: User) {
    this.authentKO = false;
    localStorage.setItem('session', creds.token);
    localStorage.setItem('account', creds.accountId.toString());
    localStorage.setItem('user', creds.fullName);
    localStorage.setItem('username', creds.userName);
    localStorage.setItem('admin', creds.admin.toString());
    console.log('Authentication ok for ' + creds.userName);
    this.router.navigate(['/home']);
  }

  failedLogin() {
    this.authentKO = true;
    this.buttonLabel = 'Login';
    this.working = false;
  }
}
