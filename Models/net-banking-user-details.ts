export class NetBankingUserDetails {
    userId:number=0;
    accountNumber:string="";
    userPassword:string="";
    transactionPass:string="";

    constructor(a:number, b:string, c:string, d:string){
        this.userId = a;
        this.accountNumber=b;
        this.userPassword=c;
        this.transactionPass=d;
    }
}
