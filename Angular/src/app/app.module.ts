
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertifyService } from './alertify.service';
import { RegistrationService } from './registration.service';
import { TransactionService } from './transaction.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ AlertifyService,RegistrationService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
