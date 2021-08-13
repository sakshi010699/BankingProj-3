export class NetBankingUserDetails {
    userId:number=0;
    accountNumber:number=0;
    userPassword:string="";
    transactionPass:string="";

    constructor(a:number, b:number, c:string, d:string){
        this.userId = a;
        this.accountNumber=b;
        this.userPassword=c;
        this.transactionPass=d;
    }
}
