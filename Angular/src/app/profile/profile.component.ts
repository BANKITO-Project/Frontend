import { AlertifyService } from './../../../../Admin/src/alertify.service';
import { RegistrationService } from './../registration.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	
	constructor(private router:Router,private service:RegistrationService,
		private alertify:AlertifyService){}

	private user= new User();
	ngOnInit() {
		if(localStorage.getItem('token')){
		let getUserObj=JSON.parse(localStorage.getItem('token'));  
		this.user.customerId=getUserObj.customerId;
		this.user.accountId=getUserObj.accountId;
		this.user.customerFirstname=getUserObj.customerFirstname;
		this.user.customerLastname=getUserObj.customerLastname;
		this.user.customerEmail=getUserObj.customerEmail;
		this.user.customerCity=getUserObj.customerCity;
		this.user.customerContact=getUserObj.customerContact;
	}
}
}
