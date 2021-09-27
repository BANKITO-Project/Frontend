import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AlertifyService } from '../alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }
  user = new User();
  user1=new User();
  msg = '';

  constructor(
    private router: Router,
    private service: RegistrationService,
    private alertify:AlertifyService
) {
}


  login() {
    this.service.loginUser(this.user).subscribe(
      data => {
        this.alertify.success("Login Sucessful");
        localStorage.setItem('token',JSON.stringify(data));
        this.router.navigate(['/profile'])
      },
      error => {
        this.alertify.error("Login Failed");
        this.msg = "Invalid email or password";
      }
    );
  }

}
