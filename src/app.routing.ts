import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./app/home/home.component";
import {BookingComponent} from "./app/booking/booking.component";
import {AboutComponent} from "./app/about/about.component";

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
