export class BeneficiaryDetails {
    

    BeneficiaryAccNo:number=0;
    UserAccountNo:number=0;
    BeneficiaryName:string="";
    NickName:string="";
    constructor(a:number,b:number,c:string,d:string){
        this.BeneficiaryAccNo=a;
        this.UserAccountNo=b;
        this.BeneficiaryName=c;
        this.NickName=d;
        
    }

}
