import { User } from './../user';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertifyService } from '../alertify.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  

 constructor(private router:Router,private alertify:AlertifyService){}
 private user= new User();

 ngOnInit() {
  if(localStorage.getItem('token')){
   let getUserObj=JSON.parse(localStorage.getItem('token'));  
   this.user.customerBalance=getUserObj.customerBalance;
}
 }

}
