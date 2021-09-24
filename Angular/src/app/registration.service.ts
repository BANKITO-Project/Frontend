import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public loginUser(user:User): Observable<any>{
    return this.http.post<any>("http://localhost:8080/login",user);
  }
  public registerUser(user:User): Observable<any>{
    return this.http.post<any>("http://localhost:8080/register",user);
  }
}
