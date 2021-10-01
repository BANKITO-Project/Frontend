import { Transaction } from './transaction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private http:HttpClient,private router:Router) { }

  public deposit(transaction:Transaction): Observable<User>{
    const url="http://localhost:8080/deposite";
    return this.http.put<User>(url,transaction).pipe(catchError(this.handleError));
  }

  public withdrawl(transaction:Transaction): Observable<User>{
    const url="http://localhost:8080/withdraw";
    return this.http.put<User>(url,transaction).pipe(catchError(this.handleError));
  }

  public transfer(transaction:Transaction): Observable<User>{
    const url="http://localhost:8080/transfer";
    return this.http.put<User>(url,transaction).pipe(catchError(this.handleError));
  }

  public getAllTransactions(id:number): Observable<Transaction[]>{
    const url="http://localhost:8080/transactions/";
    return this.http.get<Transaction[]>(url+id).pipe(catchError(this.handleError));
  }

  handleError(error){
    return throwError(error.message || "server error");
  }
}
