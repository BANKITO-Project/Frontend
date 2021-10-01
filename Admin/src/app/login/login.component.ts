import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/alertify.service';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  msg = '';
  admin=new Admin();
  constructor(
    private router: Router,
    private service: AdminService,
    private alertify:AlertifyService
) {}

  login() {
    console.log(this.admin.email);
    console.log(this.admin.password);
    this.service.loginUser(this.admin).subscribe(
      data => {
        this.alertify.success("Login Sucessful");
        localStorage.setItem('token',JSON.stringify(data));
        this.router.navigate(['customers'])
      },
      error => {
        this.alertify.error("Login Failed");
        this.msg = "Invalid email or password";
      }
    );
  }

}
