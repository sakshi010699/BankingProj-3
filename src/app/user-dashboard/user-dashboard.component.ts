import { Component, OnInit } from '@angular/core';
import { GlobalAccountService } from '../Services/global-account.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor( public global : GlobalAccountService) { }

  ngOnInit(): void {

  }

  

}

