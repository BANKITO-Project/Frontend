import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Transaction } from './transaction';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient,private router:Router) { }

  public loginUser(admin:Admin): Observable<Admin>{
    return this.http.post<Admin>("http://localhost:8080/admin/login",admin);
  }

  public getAllCustomers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/customers");
  }

  public getCustomer(id:number):Observable<User>{
    return this.http.get<User>("http://localhost:8080/customer/"+id);
  }

  public deactivate(id: number):any {
    return this.http.delete("http://localhost:8080/customer/"+id);
  }

  public getAllTransactions(id: number): Observable<Transaction[]>{
    return this.http.get<Transaction[]>("http://localhost:8080/transactions/"+id);
  }

  public getTransaction(id: number): Observable<Transaction>{
    return this.http.get<Transaction>("http://localhost:8080/transaction/"+id);
  }
 
}
