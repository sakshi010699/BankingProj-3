export class UserTransaction {
    transactionId:number=0;
    accountNumber:number=0;
   transactionDate:Date=new Date();
    transactionType:string="";
    accountBalance:number=0;
    remark:string="";


    constructor (a:number, b:number, c:Date, d:string, e:number, f:string)
    {
        this.transactionId=a;
        this.accountNumber=b;
        this.transactionDate=c;
        this.transactionType=d;
        this.accountBalance=e;
        this.remark=f;
    }

}
