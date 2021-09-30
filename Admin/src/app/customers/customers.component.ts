import { Transaction } from './../transaction';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/alertify.service';
import { AdminService } from '../admin.service';
import { User } from '../user';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  private users: User[];
  constructor(private service: AdminService,private router:Router
         ,private alertify:AlertifyService) {

  }

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);
    }else{
    this.service.getAllCustomers().subscribe(res => {
      this.users = res;
    })
  }
  }
  transactions(id:number){
    localStorage.removeItem('token');
    localStorage.setItem('token',JSON.stringify(id));
    this.alertify.success("Transactions for customer with Id "+id);
    this.router.navigate(['/transactions'])
  }
 
  public deactivate(id: number): void {
    this.service.deactivate(id).subscribe(res => {
    this.alertify.success("Customer Account with Id "+id+" Deactivated");  
    this.router.navigate(['/searchcustomer']);
    })
}
}
