import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawlComponent } from './withdrawl/withdrawl.component';
import { TransferComponent } from './transfer/transfer.component';


const routes: Routes = [
  {path: 'login',component: LoginComponent },
  {path: 'signup',component: SignupComponent },
  {path: 'account',component: AccountComponent},
  {path: 'deposit',component: DepositComponent},
  {path: 'withdrawl',component: WithdrawlComponent},
  {path: 'transfer',component: TransferComponent},
  {path: 'profile',component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,SignupComponent,AccountComponent,
            DepositComponent,WithdrawlComponent,TransferComponent,ProfileComponent];