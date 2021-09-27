import { Router } from '@angular/router';
import { User } from './user';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  
  constructor(private http:HttpClient,private router:Router) { }

  public loginUser(user:User): Observable<User>{
    return this.http.post<User>("http://localhost:8080/customer/login",user);
  }

  public registerUser(user:User): Observable<User>{
    return this.http.post<User>("http://localhost:8080/customer",user);
  }

}
