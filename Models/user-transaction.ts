export class UserTransaction {
    TransactionID:number=0;
    AccountNumber:number=0;
   TransactionDate:Date=new Date();
    TransactionType:string="";
    AccountBalance:number=0;
    Remark:string="";


    constructor (a:number, b:number, c:Date, d:string, e:number, f:string)
    {
        this.TransactionID=a;
        this.AccountNumber=b;
        this.TransactionDate=c;
        this.TransactionType=d;
        this.AccountBalance=e;
        this.Remark=f;
    }

}
