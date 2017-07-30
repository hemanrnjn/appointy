import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {routing} from "../app.routing";
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import {DataService} from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
