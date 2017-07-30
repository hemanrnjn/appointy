import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
declare const $: any;
import * as moment from 'moment';
import {DataService} from "../data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  userForm: FormGroup;

  services = [
    {name: 'business_development_chk', value: 'Business Development Service'},
    {name: 'account_executive_chk', value: 'Account Executive Service'},
    {name: 'registration_doc_chk', value: 'New Registration Document Submission'},
    {name: 'license_doc_chk', value: 'New License Document Submission'},
    {name: 'general_enquiry_chk', value: 'General Enquiries'}
  ];

  users: any[] = [];
  appointmentTime: any[] = [];
  appointmentServices: any[] = [];
  finalData: any[] = [];
  loggedUser = false;
  servicesData: any;
  day_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  month_names = ["", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  day_no: any;
  days: any;
  today: any;
  nextDate: any;
  previousDate: any;
  currentmonth: any;
  currentyear: any;
  todaydate: any;
  monthitr: any;
  firstrow: any[] = [];
  restrows0: any[] = [];
  restrows1: any[] = [];
  restrows2: any[] = [];
  restrows3: any[] = [];
  restrows4: any[] = [];
  workingDayTimes = ['8:00 a.m.', '8:10 a.m.', '8:20 a.m.', '8:30 a.m.', '8:40 a.m.', '8:50 a.m.',
    '9:00 a.m.', '9:10 a.m.', '9:20 a.m.', '9:30 a.m.', '9:40 a.m.', '9:50 a.m.', '10:00 a.m.',
    '10:10 a.m.', '10:20 a.m.', '10:30 a.m.', '10:40 a.m.', '10:50 a.m.', '11:00 a.m.', '11:10 a.m.',
    '11:10 a.m.', '11:20 a.m.', '11:30 a.m.', '11:40 a.m.', '11:50 a.m.', '12:00 p.m.', '12:10 p.m.',
    '12:20 p.m.', '12:30 p.m.', '12:40 p.m.', '12:50 p.m.', '1:00 p.m.', '1:10 p.m.', '1:20 p.m.',
    '1:30 p.m.', '1:40 p.m.', '1:50 p.m.', '2:00 p.m.', '2:10 p.m.', '2:20 p.m.', '2:30 p.m.',
    '2:40 p.m.', '2:50 p.m.', '3:00 p.m.', '3:10 p.m.', '3:20 p.m.', '3:30 p.m.'];

  constructor(private dataService: DataService, private changeDetector: ChangeDetectorRef, private router: Router) {
    this.servicesData = this.dataService.servicesData;
    console.log(this.dataService.servicesData);

    this.userForm = new FormGroup({
      'user_first_name': new FormControl('', Validators.required),
      'user_last_name': new FormControl('', Validators.required),
      'user_email': new FormControl('', [Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'user_contact': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {

    if (localStorage.getItem('name')) {
      this.loggedUser = true;
    }

    this.currentyear = moment().format('YYYY');
    this.currentmonth = moment().format('MMMM');
    this.monthitr = this.month_names.indexOf(this.currentmonth);
    let month = this.monthitr + 1;
    let year = this.currentyear;
    if (month > 12) {
      year++;
      month = 1;
    }
    const date = 1;
    const temp = '' + year + '-' + month + '-' + date + '';
    this.day_no = this.day_names.indexOf(moment(temp, 'YYYY-MM-DD').format('dddd'));
    this.today = moment().format('dddd');
    this.todaydate = moment().format('DD');
    this.days = moment(temp, 'YYYY-MM-DD').daysInMonth();
    this.get_calendar(this.day_no, this.days);
  }

  get_calendar(day_no, days) {
    let c;
    for (c = 0; c <= 6; c++) {
      if (c == day_no) {
        break;
      }
      else {
        this.firstrow.push('');
      }
    }

    let count = 1;
    for (; c <= 6; c++) {
      this.firstrow.push(count);
      count++;
    }

    loop : for (let r = 0; r <= 5; r++) {
      for (let i = 0; i <= 6; i++) {
        if (count > days) {
          break loop;
        }
        if (r == 0) {
          this.restrows0.push(count);
          count++;
        }
        else if (r == 1) {
          this.restrows1.push(count);
          count++;
        }
        else if (r == 2) {
          this.restrows2.push(count);
          count++;
        }
        else if (r == 3) {
          this.restrows3.push(count);
          count++;
        }
        else if (r == 4) {
          this.restrows4.push(count);
          count++;
        }
      }
    }
    count = 0;
  }

  nextmonth() {
    this.firstrow = [];
    this.restrows0 = [];
    this.restrows1 = [];
    this.restrows2 = [];
    this.restrows3 = [];
    this.restrows4 = [];
    this.monthitr++;
    if (this.monthitr > 12) {
      this.monthitr = 1;
      this.currentyear++;
    }
    const month = this.monthitr;
    console.log(month);
    const year = this.currentyear;
    console.log(year);
    // if (month > 12) {
    //   year++;
    //   month = 1;
    // }
    const date = 1;
    this.nextDate = '' + year + '-' + month + '-' + date + '';
    console.log(this.nextDate);
    this.day_no = this.day_names.indexOf(moment(this.nextDate, 'YYYY-MM-DD').format('dddd'));
    this.days = moment(this.nextDate, 'YYYY-MM-DD').daysInMonth();
    this.currentmonth = this.month_names[month];
    this.currentyear = year;
    this.get_calendar(this.day_no, this.days);
  }

  previousmonth() {
    this.firstrow = [];
    this.restrows0 = [];
    this.restrows1 = [];
    this.restrows2 = [];
    this.restrows3 = [];
    this.restrows4 = [];
    this.monthitr--;
    if (this.monthitr < 1) {
      this.monthitr = 12;
      this.currentyear--;
    }
    let month = this.monthitr - 1;
    let year = this.currentyear;
    // if (month < 1) {
    //   year--;
    //   month = 12;
    // }
    const date = 1;
    this.previousDate = '' + year + '-' + month + '-' + date + '';
    this.day_no = this.day_names.indexOf(moment(this.previousDate, 'YYYY-MM-DD').format('dddd'));
    this.days = moment(this.previousDate, 'YYYY-MM-DD').daysInMonth();
    this.currentmonth = this.month_names[month];
    this.currentyear = year;
    this.get_calendar(this.day_no, this.days);
  }




  bookslot(event) {
    console.log(event.target.id);
    const day = moment(event.target.id, 'YYYY-MM-DD').format('dddd');
    if (day == 'Sunday' || day == 'Saturday') {
      $('#noAppointment').modal('show');
    }
    else {
      $('#datePicker').modal('show');
    }
  }

  timeAllotment(event) {
    const id = event.target.id;
    let data;
    const arr = [];
    for (data in this.servicesData) {
      if (this.servicesData.hasOwnProperty(data)){
        arr.push(this.servicesData[data]);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        this.appointmentServices.push(this.services[i].value);
      }
    }
    const count = this.appointmentServices.length;
    let temp = this.workingDayTimes.indexOf(id);
    for ( let j = 0; j < count; j++) {
      this.appointmentTime.push(this.workingDayTimes[temp]);
      temp++;
    }
    for ( let k = 0; k < count; k++) {
      this.finalData[k] = {
        service: this.appointmentServices[k],
        time: this.appointmentTime[k]
      };
    }
    console.log(this.finalData);
    console.log(this.appointmentTime);
    console.log(id);
    if (!this.loggedUser) {
      $('#userInfo').modal('show');
      $('#datePicker').modal('hide');
    }
    else {
      $('#confirmAppointment').modal('show');
    }
  }

  userFormSubmit() {
    $('#userInfo').modal('hide');
    $('#confirmAppointment').modal('show');
    this.dataService.addUser({
      user_first_name: this.userForm.value.user_first_name,
      user_last_name: this.userForm.value.user_last_name,
      user_email: this.userForm.value.user_email,
      user_contact: this.userForm.value.user_contact
    }).subscribe( (data) => {
      this.users = data.json();
      this.changeDetector.detectChanges();
      this.loggedUser = true;
      localStorage.setItem('name', this.userForm.value.user_first_name + ' ' + this.userForm.value.user_last_name);
      localStorage.setItem('email', this.userForm.value.user_email);
      localStorage.setItem('contact', this.userForm.value.user_contact);
    });
  }

  confirmAllotment () {
    $('#confirmAppointment').modal('hide');
    this.dataService.bookAppointment({
      user_email: localStorage.getItem('email'),
    });
    this.router.navigateByUrl('home');
  }

}
