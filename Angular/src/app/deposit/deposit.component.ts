import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);
    }
  }

}
