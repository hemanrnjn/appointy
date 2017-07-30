import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedUser = false;

  constructor(private router: Router) {
    if (localStorage.getItem('name')) {
      this.loggedUser = true;
    }
  }
  logout() {
    localStorage.setItem('name', '');
    localStorage.setItem('email', '');
    localStorage.setItem('contact', '');
    this.router.navigateByUrl('home');
    this.loggedUser = false
  }
}
