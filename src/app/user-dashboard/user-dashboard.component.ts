import { Component, OnInit } from '@angular/core';
import { GlobalAccountService } from '../Services/global-account.service';
import { Router } from '@angular/router';
import { UserRouteGuard } from '../user-route.guard';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor( public global : GlobalAccountService, private router:Router, private obj2:UserRouteGuard) { }

  ngOnInit(): void {

  }

  returnToLogin(){
    this.global.GlobalAadharCard_Number="";
    this.global.GlobalUserId_Number=0;
    this.global.GlobalUser_Name="";
    this.global.GlobalAcc_Number=0;
    this.obj2.isLogin=false;
    this.router.navigate(["/LoginComponent"]);
  }
  

}

