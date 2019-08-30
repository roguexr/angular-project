import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  question1 = '';
  question2 = '';
  question3 = '';
  question4 = '';

  ngOnInit() {
  }

  getAllInput() {
    return this.question1 + ' ' + this.question2 + ' ' + this.question3 + ' ' + this.question4;
  }

}
