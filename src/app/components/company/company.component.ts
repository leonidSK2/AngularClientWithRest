import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { CompanyService } from 'src/app/services/company.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent implements OnInit {

    public company: Company = new Company();
    public companies: Company[] = new Array(0);

    public isadmin : boolean = false;
    public iscompany : boolean = false;
    public iscustomer : boolean = false;
    public usertype: string;

  constructor(private service: CompanyService) { 
   
  }

  ngOnInit() {
    this.isadmin = LoginService.isadmin;
    this.iscompany = LoginService.iscompany;
    this.iscustomer = LoginService.iscustomer;
    this.usertype = LoginService.usertype;
  }

  public saveCompany(): void{
   
    var compjson = JSON.stringify(this.company);
    alert(compjson);
      console.log(this.company);
      
      this.service.createCompany(this.company).subscribe( c => {
       
        console.log(c);
        if(c.message != undefined){
            alert(c.message);
        }
      }, err => {
          console.log(err);
      });
 
  }

  public getCompanies() :void{   
    this.service.getCompanies().subscribe( result => {    
        this.companies = result;
    })
    
  }

  public deleteCompany(id: number) :void{
    alert("delete company, id=" + id);
    this.service.deleteCompany(id).subscribe(c=>{
      console.log(c);
      if(c.message != undefined){
        alert(c.message);
      }
    }, err => {
      console.log(err);
    });

  }
    
}
