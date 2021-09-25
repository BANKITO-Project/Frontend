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


  user1=new User();
  public getUser(email: string): Observable<any>{
    return this.http.get<any>("http://localhost:8080/customer/"+email);
  }

  public loginUser(user:User): Observable<User>{
    return this.http.post<User>("http://localhost:8080/customer/login",user);
  }

  public registerUser(user:User): Observable<User>{
    return this.http.post<User>("http://localhost:8080/customer",user);
  }

}
