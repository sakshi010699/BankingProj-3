export class AccountDetails {
    accountNumber:number=0;
    aadharCardNumber:string="";
    accountType:string="";
    accountBalance: number=0;
    constructor(a:number,b:string,c:string,d:number){
 this.accountNumber=a;
 this.aadharCardNumber=b;
 this.accountType=c;
 this.accountBalance=d;


    }

}
