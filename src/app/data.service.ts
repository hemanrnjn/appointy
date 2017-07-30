import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class DataService {

  servicesData: Observable<any>;

  constructor(private http: Http) { }

  pushData(data) {
    this.servicesData = data;
  }

  addUser(userData: any) {
    const body = JSON.stringify(userData);
    console.log(body);
    // headers.append('Content-Type' , 'application/json');
    return this.http.post('http://localhost/appointy/add_user.php' , body);
  }

  bookAppointment(appointmentData: any) {
    const body = JSON.stringify(appointmentData);
    console.log(body);
    // headers.append('Content-Type' , 'application/json');
    return this.http.post('http://localhost/appointy/add_appointment.php' , body);
  }

}
