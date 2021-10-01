import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/alertify.service';
import { AdminService } from '../admin.service';
import { User } from '../user';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent implements OnInit {

  private user:User;
  constructor(private service:AdminService,private router:Router,
                private alertify:AlertifyService) { }

  ngOnInit() {
  }
  private bool:boolean;
  getCustomer(id:number){
    this.service.getCustomer(id).subscribe(res => {
      this.user = res;
      this.bool=true;
    },
    error=>{
      this.bool=false;
      this.alertify.error("Customer with Id "+id+" not exists");
    })
  }
  transactions(id:number){
    localStorage.removeItem('token');
    localStorage.setItem('token',JSON.stringify(id));
    this.alertify.success("Transactions for customer with Id "+id);
    this.router.navigate(['/transactions'])
  }
  // transactions(){
  //   this.alertify.success("Enter customerid to get transactions");
  //   this.router.navigate(['/transactions'])
  // }
 
  public deactivate(id: number): void {
    this.service.deactivate(id).subscribe(res => {
    this.alertify.success("Customer Account with Id "+id+" Deactivated"); 
    this.router.navigate(['/customers']);
    })
  }
}
