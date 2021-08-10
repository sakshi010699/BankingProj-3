import { NgModule } from '@angular/core';
import { OpenAccountComponent } from './open-account/open-account.component';
import { IMPSTransactionComponent } from './impstransaction/impstransaction.component';
import { NEFTTransactionComponent } from './nefttransaction/nefttransaction.component';
import { RTGSTransactionComponent } from './rtgstransaction/rtgstransaction.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { NetbankingRegisterComponent } from './netbanking-register/netbanking-register.component';
import {Router, RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { SetNewTranPaswordComponent } from './set-new-tran-pasword/set-new-tran-pasword.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { UpdateCredentialsComponent } from './update-credentials/update-credentials.component';
import { OpenAccount2Component } from './open-account2/open-account2.component';



const routes: Routes = [{ path: "Home", redirectTo: "Home", pathMatch: "full" },
{ path: "Home", component: HomeComponent },
{ path: "Login", component: LoginComponent },
{ path: "Register", component: NetbankingRegisterComponent },
{ path: "IMPS", component: IMPSTransactionComponent },
{ path: "RTGS", component: RTGSTransactionComponent },
{ path: "NEFT", component: NEFTTransactionComponent },
{ path: "AddPayee", component: BeneficiaryComponent },
{ path: "SetPassword", component: SetNewPasswordComponent },
{ path: "SetTranPassword", component: SetNewTranPaswordComponent },
{ path: "UserDashboard", component: UserDashboardComponent },
{ path: "ForgotPassword", component: ForgotPasswordComponent },
{ path: "ForgotUserId", component: ForgotUserIdComponent },
{ path: "OpenSavingsAccount", component: OpenAccount2Component },
{ path: "FundsTransfer", component: FundsTransferComponent },
{ path: "UpdateCredentials", component: UpdateCredentialsComponent },




{ path: '**', redirectTo: '' }];
export const appRoutingModule = RouterModule.forRoot(routes);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

