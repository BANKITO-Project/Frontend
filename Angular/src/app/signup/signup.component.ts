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
        this.msg="Registration successful";
        this.router.navigate(['/dashboard'])
      },
      error => {
        console.log("exception occured")
        this.msg = error.error;
      }
    );
  }
  // registrationForm = new FormGroup({
  //   //for validation we can pass any in array
  //   Firstame: new FormControl('',[Validators.pattern('[a-z]{3,10}'),Validators.required]),
  //   LastName: new FormControl('',[Validators.required,Validators.pattern('[a-z]{3,10}')]),
  //   EmailId: new FormControl('',[Validators.required,Validators.email]),
  //   Password: new FormControl('',[Validators.required]),
  //   MobileNumber: new FormControl('',[Validators.required,Validators.pattern('[1-9]{1}[0-9]{9}')]),
  // });
  
  // //for name validation
  // get Name(){
  //   return this.registrationForm.get('Name');
  // }
  // //onSubmit()
  // onSubmit(){
  //   console.log(this.registrationForm.value);
  //   this.router.navigate(['/dashboard']); 
  // }
   
}
