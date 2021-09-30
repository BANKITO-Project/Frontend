import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/alertify.service';
import { AdminService } from '../admin.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  private transactions:Transaction[];
  constructor(private router:Router,private service:AdminService,
              private alertify:AlertifyService) { }

  bool:boolean=false;
  n:number;
  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);
    }else{
      let obj=JSON.parse(localStorage.getItem('token'));
      this.service.getAllTransactions(obj).subscribe(res => {
             this.transactions = res;
             this.n=obj;
             this.bool=true;
           })
    }
}
// bool:boolean;
// getTransactions(id:number){
//   this.service.getAllTransactions(id).subscribe(res => {
//     this.transactions = res;
//     this.bool=true;
//   },
//   error=>{
//     this.bool=false;
//     this.alertify.error("Customer with Id "+id+" not present");
//   })
// }
}
