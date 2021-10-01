import { TransactionService } from './../../../Project/src/app/transaction.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers/customers.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { GetTransactionComponent } from './get-transaction/get-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    SearchcustomerComponent,
    TransactionsComponent,
    GetTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
