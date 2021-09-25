import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private loginService: RegistrationService, private router : Router) {
	}
	loggedIn(){
		return localStorage.getItem('token');
	}
	logout(){
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
	}
}
