import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services = {
    business_development_chk: false,
    account_executive_chk: false,
    registration_doc_chk: false,
    license_doc_chk: false,
    general_enquiry_chk: false,
  };

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.services.business_development_chk = false;
    this.services.account_executive_chk = false;
    this.services.registration_doc_chk = false;
    this.services.license_doc_chk = false;
    this.services.general_enquiry_chk = false;
  }

  serviceChoice() {
    $('#services').modal('show');
  }

  servicesSelected() {
    $('#services').modal('hide');
    this.dataService.pushData(this.services);
    console.log(this.services);
    this.router.navigateByUrl('booking');
  }

  toggle(event) {
    const id = event.target.id;
    if (id == '1') {
      if (this.services.business_development_chk) {
        this.services.business_development_chk = false;
      }
      else {
        this.services.business_development_chk = true;
      }
    }
    else if (id == '2'){
      if (this.services.account_executive_chk) {
        this.services.account_executive_chk = false;
      }
      else {
        this.services.account_executive_chk = true;
      }
    }
    else if (id == '3'){
      if (this.services.registration_doc_chk) {
        this.services.registration_doc_chk = false;
      }
      else {
        this.services.registration_doc_chk = true;
      }
    }
    else if (id == '4'){
      if (this.services.license_doc_chk) {
        this.services.license_doc_chk = false;
      }
      else {
        this.services.license_doc_chk = true;
      }
    }
    else if (id == '5'){
      if (this.services.general_enquiry_chk) {
        this.services.general_enquiry_chk = false;
      }
      else {
        this.services.general_enquiry_chk = true;
      }
    }

  }

}
