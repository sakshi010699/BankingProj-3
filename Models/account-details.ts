export class AccountDetails {
    AccountNumber:number=0;
    AadharCardNumber:string="";
    AccountType:string="";
    AccountBalance: number=0;
    constructor(a:number,b:string,c:string,d:number){
 this.AccountNumber=a;
 this.AadharCardNumber=b;
 this.AccountType=c;
 this.AccountBalance=d;


    }

}
