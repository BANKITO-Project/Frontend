import { Transaction } from './transaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private http:HttpClient,private router:Router) { }

  public deposit(transaction:Transaction): Observable<User>{
    return this.http.put<User>("http://localhost:8080/deposite",transaction);
  }

  public withdrawl(transaction:Transaction): Observable<User>{
    return this.http.put<User>("http://localhost:8080/withdraw",transaction);
  }

  public transfer(transaction:Transaction): Observable<User>{
    return this.http.put<User>("http://localhost:8080/transfer",transaction);
  }

  public getAllTransactions(id:number): Observable<Transaction[]>{
    return this.http.get<Transaction[]>("http://localhost:8080/transactions/"+id);
  }
}
