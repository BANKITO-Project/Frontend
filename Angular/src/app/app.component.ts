import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegistrationService } from './registration.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	title='Project';

	constructor(private loginService: RegistrationService, private router : Router
		,private alertify:AlertifyService) {
	}
	loggedIn(){
		return localStorage.getItem('token');
	}
	logout(){
        localStorage.removeItem('token');
		this.alertify.success("Logout Success")
        this.router.navigate(['/login']);
	}
}
