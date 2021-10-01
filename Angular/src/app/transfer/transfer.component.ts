import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../alertify.service';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  msg='';
  constructor(private router:Router,private service:TransactionService
      ,private alertify:AlertifyService){}

  private transaction=new Transaction();
  ngOnInit() {
    if(localStorage.getItem('token')){
		 let getUserObj=JSON.parse(localStorage.getItem('token'));
     this.transaction.customerId=getUserObj.customerId;  
  }
}

  updateBalance(amount:number){
    if(amount>0){
    this.transaction.transactionAmount=amount;
    this.service.transfer(this.transaction).subscribe(
      data=>{
        localStorage.removeItem('token');
        localStorage.setItem('token',JSON.stringify(data));
        this.alertify.success("Transfer Successful");
        this.router.navigate(['/account']);
      },
      error=>{
        this.alertify.error("Transfer Failed");
        this.msg="Transfer Failed, Not Enough balance to transfer";
      } 
    );
  }else{
    this.alertify.warning("Amount is not valid");
    this.msg="Amount should be greater than zero";
  }
}

}
