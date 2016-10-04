import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./security/login.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {AddComponent} from "./calendar/add.component";

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: CalendarComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

