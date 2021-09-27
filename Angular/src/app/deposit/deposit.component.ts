import { TransactionService } from './../transaction.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Transaction } from '../transaction';
import { AlertifyService } from '../alertify.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  msg='';
  constructor(private router:Router,private service:TransactionService
      ,private alertify:AlertifyService){}

  private transaction=new Transaction();
  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);
    }else{
		 let getUserObj=JSON.parse(localStorage.getItem('token'));
     this.transaction.customerId=getUserObj.customerId;  
    }
  }

  updateBalance(amount:number){
    if(amount>0){
    this.transaction.transactionAmount=amount;
    this.service.deposit(this.transaction).subscribe(
      data=>{
        localStorage.removeItem('token');
        localStorage.setItem('token',JSON.stringify(data));
        this.alertify.success("Deposit Successful");
        this.router.navigate(['/account']);
      },
      error=>{
        this.alertify.error("Deposit Failed");
        this.msg="error occured";
      } 
    );
  }else{
    this.alertify.warning("Amount is not valid");
    this.msg="Amount should be greater than zero";
  }
}
}
