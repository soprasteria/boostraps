import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'ASM';

  constructor(private router: Router) {
  };

  loggedUser() {
    return localStorage.getItem('user');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  logged(): boolean {
    return localStorage.getItem('session') != null;
  }
}

