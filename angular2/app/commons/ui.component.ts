import {OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoginService} from "../security/login.service";

export class UiComponent implements OnInit {

  constructor(protected router: Router, protected sLogin: LoginService) {};

  ngOnInit(): void {
    // Check session
    var token:string = localStorage.getItem('session');
    var username:string = localStorage.getItem('username');
    // Mock here
    // if (token && username) {
    //   console.log('Token existing');
    //   this.sLogin.check(username, token).then(res => {
    //     if (res == "OK") {
    //       console.log('Valid token, go to home');
    //       this.router.navigate(['/home']);
    //     } else {
    //       console.log('Invalid token, go to login');
    //       localStorage.clear();
    //       this.router.navigate(['']);
    //     }
    //   })
    //
    // } else {
    //   console.log('No valid token valid, restart from login !');
    //   this.router.navigate(['']);
    // }
    this.router.navigate(['/home']);
  }
}
