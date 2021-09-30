
import { CustomersComponent } from './customers/customers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { GetTransactionComponent } from './get-transaction/get-transaction.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'customers',component:CustomersComponent},
  {path:'searchcustomer',component:SearchcustomerComponent},
  {path:'transactions',component:TransactionsComponent},
  {path:'getTransaction',component:GetTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
