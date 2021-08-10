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
import { OpenAccount2Component } from './open-account2/open-account2.component' 

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
    OpenAccount2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
