export class BeneficiaryDetails {
    

    beneficiaryAccNo:number=0;
    userAccountNo:number=0;
    beneficiaryName:string="";
    nickName:string="";
    constructor(a:number,b:number,c:string,d:string){
        this.beneficiaryAccNo=a;
        this.userAccountNo=b;
        this.beneficiaryName=c;
        this.nickName=d;
        
    }

}
