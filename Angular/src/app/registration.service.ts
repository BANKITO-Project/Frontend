import { Router } from '@angular/router';
import { User } from './user';
import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  
  constructor(private http:HttpClient,private router:Router) { }

  public loginUser(user:User): Observable<User>{
    const url="http://localhost:8080/customer/login";
    return this.http.post<User>(url,user).pipe(catchError(this.handleError));
  }

  public registerUser(user:User): Observable<User>{
    const url="http://localhost:8080/customer";
    return this.http.post<User>(url,user).pipe(catchError(this.handleError));
  }
handleError(error){
  return throwError(error.message || "server error");
}
}

