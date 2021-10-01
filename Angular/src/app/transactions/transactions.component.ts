import { Transaction } from './../transaction';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../alertify.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  private transactions:  Transaction[];
  constructor(private router:Router,private service: TransactionService,
    private alertify:AlertifyService) {
  }

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.alertify.error("Login First");
      this.router.navigate(['/login']);
    }else{
		 let getUserObj=JSON.parse(localStorage.getItem('token'));
     this.service.getAllTransactions(getUserObj.customerId).subscribe(res => {
      this.transactions = res;
    })
    }
  }



}
