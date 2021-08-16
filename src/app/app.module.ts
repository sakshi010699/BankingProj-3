import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import {HttpClientModule} from '@angular/common/http';
import { UpdateCredentialsComponent } from './update-credentials/update-credentials.component';
import { OpenAccount2Component } from './open-account2/open-account2.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component'
import { FormsModule } from '@angular/forms';
import { AccountStatementComponent } from './account-statement/account-statement.component'; 
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TransactionSlipComponent } from './transaction-slip/transaction-slip.component';
import { SWindowService } from './Services/s-window.service';
import { DisplayInitiatedAccountComponent } from './display-initiated-account/display-initiated-account.component';
import { AdminRouteGuard } from './admin-route.guard';
import { UserRouteGuard } from './user-route.guard';


@NgModule({
  declarations: [
    AppComponent,
    OpenAccountComponent,
    IMPSTransactionComponent,
    NEFTTransactionComponent,
    RTGSTransactionComponent,
    HomeComponent,
    LoginComponent,
    BeneficiaryComponent,
    NetbankingRegisterComponent,
    ForgotPasswordComponent,
    ForgotUserIdComponent,
    SetNewPasswordComponent,
    SetNewTranPaswordComponent,
    UserDashboardComponent,
    FundsTransferComponent,
    UpdateCredentialsComponent,
    OpenAccount2Component,
    AccountSummaryComponent,
    AccountStatementComponent,
    AdminDashboardComponent,
    TransactionSlipComponent,
    DisplayInitiatedAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SWindowService, AdminRouteGuard, UserRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
