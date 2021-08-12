

export class UserOpenAccount {
    aadharCardNumber:string="";
    title:string="";
    firstName:string="";
    middleName:string=""
    lastName:string="";
    fathersName:string="";
    mobileNumber:string="";
    emailId:string="";
    dateOfBirth:Date= new Date();
    residentialAddrLine1:string="";
    residentialAddrLine2:string="";
    residentialLandmark:string="";
    residentialPincode:string="";
    permEqualRes:boolean=false;
    
    occupationType:string="";
    sourceOfIncome:string="";
    grossAnnualIncome:string="";
    debitCard:boolean=false;
    netBanking:boolean=false;
    approvalStatus:boolean=false;
    constructor(a:string,b:string,c:string,d:string,e:string,f:string,g:string,h:string,i:Date,j:string,k:string,l:string,m:string,n:boolean,o:string,p:string,q:string,r:boolean,s:boolean,t:boolean){

        this.aadharCardNumber=a;
        this.title=b;
        this.firstName=c;
        this.middleName=d;
        this.lastName=e;
        this.fathersName=f;
        this.mobileNumber=g;
        this.emailId=h;
        this.dateOfBirth=i;
        this.residentialAddrLine1=j;
        this.residentialAddrLine2=k;
        this.residentialLandmark=l;
        this.residentialPincode=m;
        this.permEqualRes=n;
        this.occupationType=o;
        this.sourceOfIncome=p;
        this.grossAnnualIncome=q;
        this.debitCard=r;
        this.netBanking=s;
        this.approvalStatus=t;
    }




}
