import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawlComponent } from './withdrawl/withdrawl.component';
import { TransferComponent } from './transfer/transfer.component';


const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'login',component: LoginComponent },
  {path: 'signup',component: SignupComponent },
  {path: 'dashboard', component:DashboardComponent},
  {path: 'home',component: HomeComponent},
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
export const routingComponents = [LoginComponent,SignupComponent,DashboardComponent,HomeComponent,
                      AccountComponent,DepositComponent,WithdrawlComponent,TransferComponent,ProfileComponent];