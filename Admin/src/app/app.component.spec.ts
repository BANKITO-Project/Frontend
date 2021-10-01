import { TransactionService } from './../../../Project/src/app/transaction.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { GetTransactionComponent } from './get-transaction/get-transaction.component';
import { LoginComponent } from './login/login.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { TransactionsComponent } from './transactions/transactions.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        LoginComponent,
        CustomersComponent,
        SearchcustomerComponent,
        TransactionsComponent,
        GetTransactionComponent
        
      ],
      providers: [TransactionService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Admin'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Admin');
  });

});
