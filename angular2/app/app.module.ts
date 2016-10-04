import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import "./rxjs-extensions";
import {LoginService} from "./security/login.service";
import {LoginComponent} from "./security/login.component";
import {MdButtonModule} from "@angular2-material/button";
import {MdCardModule} from "@angular2-material/card";
import {MdInputModule} from "@angular2-material/input";
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdGridListModule} from "@angular2-material/grid-list";
import {MdListModule} from "@angular2-material/list";
import {CalendarComponent} from "./calendar/calendar.component";
import {CalendarService} from "./calendar/calendar.service";
import {CalendarRowComponent} from "./calendar/calendar.row.component";
import {AddComponent} from "./calendar/add.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    // Mock
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    // Material
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdInputModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdListModule.forRoot(),
    MdGridListModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    CalendarRowComponent,
    AddComponent
  ],
  providers: [
    LoginService, CalendarService
  ],
  bootstrap: [ AppComponent ]
  // schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
