import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  user = new User();
  msg = '';

  constructor(private router: Router, private service: RegistrationService) { }

  login() {
    this.service.loginUser(this.user).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['/dashboard'])
      },
      error => {
        console.log("exception occured")
        this.msg = "Invalid credentials,please enter valid email and password ";
      }
    );
  }
  // gotosignup(){
  //   this.router.navigate(['/signup'])
  // }
  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.pattern('[a-z]{2,10}[@][a-z]{2,5}[.][2-6]')]),
  //   password: new FormControl('', [Validators.required])
  // });

  // constructor(private router:Router,private service:RegistrationService) {
  // }

}
