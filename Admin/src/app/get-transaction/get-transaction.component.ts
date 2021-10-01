import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/alertify.service';
import { AdminService } from '../admin.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-get-transaction',
  templateUrl: './get-transaction.component.html',
  styleUrls: ['./get-transaction.component.css']
})
export class GetTransactionComponent implements OnInit {

  private transaction:Transaction;
  constructor(private router:Router,private service:AdminService,
              private alertify:AlertifyService) { }

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['login']);
    }
}
  bool:boolean;
  getTransaction(id:number){
    this.service.getTransaction(id).subscribe(res => {
      this.transaction = res;
      this.bool=true;
    },
    error=>{
      this.bool=false;
      this.alertify.error("Transaction with Id "+id+" not exists");
    })
  }
}
