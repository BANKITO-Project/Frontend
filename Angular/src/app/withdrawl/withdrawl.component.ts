import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdrawl',
  templateUrl: './withdrawl.component.html',
  styleUrls: ['./withdrawl.component.css']
})
export class WithdrawlComponent implements OnInit {

  constructor(private router:Router){}
  msg:'';
  ngOnInit(){
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login'])
    }
  }

}
