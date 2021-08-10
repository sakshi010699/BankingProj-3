

export class UserOpenAccount {
    AadharCardNumber:string="";
    Title:string="";
    FirstName:string="";
    MiddleName:string=""
    LastName:string="";
    FathersName:string="";
    MobileNumber:string="";
    EmailID:string="";
    DateOfBirth:Date= new Date();
    ResidentialAddrLine1:string="";
    ResidentialAddrLine2:string="";
    ResidentialLandmark:string="";
    ResidentialPincode:string="";
    PermEqualRes:boolean=false;
    
    OccupationType:string="";
    SourceOfIncome:string="";
    GrossAnnualIncome:string="";
    DebitCard:boolean=false;
    NetBanking:boolean=false;
    ApprovalStatus:boolean=false;
    constructor(a:string,b:string,c:string,d:string,e:string,f:string,g:string,h:string,i:Date,j:string,k:string,l:string,m:string,n:boolean,o:string,p:string,q:string,r:boolean,s:boolean,t:boolean){

        this.AadharCardNumber=a;
        this.Title=b;
        this.FirstName=c;
        this.MiddleName=d;
        this.LastName=e;
        this.FathersName=f;
        this.MobileNumber=g;
        this.EmailID=h;
        this.DateOfBirth=i;
        this.ResidentialAddrLine1=j;
        this.ResidentialAddrLine2=k;
        this.ResidentialLandmark=l;
        this.ResidentialPincode=m;
        this.PermEqualRes=n;
        this.OccupationType=o;
        this.SourceOfIncome=p;
        this.GrossAnnualIncome=q;
        this.DebitCard=r;
        this.NetBanking=s;
        this.ApprovalStatus=t;
    }




}
