import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../alertify.service';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-withdrawl',
  templateUrl: './withdrawl.component.html',
  styleUrls: ['./withdrawl.component.css']
})
export class WithdrawlComponent implements OnInit {

  msg='';
  constructor(private router:Router,private service:TransactionService,
      private alertify:AlertifyService){}

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
    this.service.withdrawl(this.transaction).subscribe(
      data=>{
        localStorage.removeItem('token');
        localStorage.setItem('token',JSON.stringify(data));
        this.alertify.success("Withdrawl Successful");
        this.router.navigate(['/account']);
      },
      error=>{
        this.alertify.error("Withdrawl Failed");
        this.msg="Withdrawl Failed, Not Enough balance";
      } 
    );
  }else{
    this.alertify.warning("Amount is not valid");
    this.msg="Amount should be greater than zero";
  }
}

}
