import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { RegistrationService } from '../registration.service';

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

  constructor(private router: Router, private service: RegistrationService) { }

  signup() {
    this.service.registerUser(this.user).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['/login']);
      },
      error => {
        console.log("exception occured")
      }
    );
  }
   
}
