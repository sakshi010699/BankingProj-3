import { Component, OnInit } from '@angular/core';
import { SadminApproveService } from '../Services/sadmin-approve.service';
import { UserOpenAccount } from 'Models/user-open-account';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  allUser : UserOpenAccount[]=[];

  User : UserOpenAccount={
    aadharCardNumber:"",
    title:"",
    firstName:"",
    middleName:"",
    lastName:"",
    fathersName:"",
    mobileNumber:"",
    emailId:"",
    dateOfBirth:new Date(),
    residentialAddrLine1:"",
    residentialAddrLine2:"",
    residentialLandmark:"",
    residentialPincode:"",
    permEqualRes:false,
    
    occupationType:"",
    sourceOfIncome:"",
    grossAnnualIncome:"",
    debitCard:false,
    netBanking:false,
    approvalStatus:false
  };
  constructor(private obj:SadminApproveService) { }

  ngOnInit(): void {
    this.get_api();
  }

  get_api():void
  {
      this.obj.getAllUsers().subscribe(data=>{
        this.allUser=data;
        //Logging the response recieved from web api.
        console.log(this.allUser);
      });
  }

  approve(item:UserOpenAccount){

    this.obj.getUserAccountById(item.aadharCardNumber)
   .subscribe(
   data => {
   
    item.approvalStatus=true;
    this.obj.updateAccount(item.aadharCardNumber,item).subscribe(data=>{
    })
    })
    }

}
