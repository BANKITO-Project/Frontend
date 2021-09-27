import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { AlertifyService } from '../alertify.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {
  }
  user = new User();
  msg='';

  constructor(private router: Router, private service: RegistrationService,
              private alertify:AlertifyService) { }

  signup() {
    this.service.registerUser(this.user).subscribe(
      data => {
        this.alertify.success("Registration Successful");
        this.router.navigate(['/login']);
      },
      error => {
        this.alertify.error("Registration Failed");
        this.msg="Email already exists";
      }
    );
  }
   
}
