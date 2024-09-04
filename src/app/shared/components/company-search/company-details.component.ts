import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Company, Officer } from './company.model';
import { CompanyService } from './company.service';
import { NgIf, NgFor } from '@angular/common';
@Component({
  selector: 'company-details-modal',
  standalone:true,
  imports:[NgIf, NgFor],

  template: `
    <div class="modal-header">
      <h5 class="modal-title">Company Details</h5>
      <button style="background-color:#000" type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss()"></button>
    </div>
    <div class="modal-body">
    <div *ngIf="!showOfficers">
      <h2>{{ company.title }}</h2>
      <table class="table">
          <tbody>
            <tr >
              <td></td>
              <td></td>        
            </tr>

            <tr >
              <td>Address</td>
              <td>{{ company.address_snippet }}</td>        
            </tr>

            <tr >
              <td>Description</td>
              <td>{{ company.description }}</td>        
            </tr>

            <tr >
              <td>Status</td>
              <td>{{ company.company_status }}</td>        
            </tr>
            
            <tr>
             <td colspan="2"><button  class="btn btn-link" (click)="showCompanyOfficer(company.company_number)">List Officers</button></td>        
            </tr>
            
          </tbody>
      </table>
    </div>

      <div *ngIf="showOfficers">
        <h4>{{ company.title }} - Officers</h4>
        <p>Company Number: {{ company.company_number }}</p>
        <table class="table">
            <tbody>
              <tr *ngFor="let officer of officers" >
                <td> 
                  <b>{{ officer.name }}</b><br/>
                  {{ officer.officer_role }}
                </td>      
              </tr>                      
            </tbody>
        </table>
      </div>

      
    </div>
  `
})
export class CompanyDetailsModalComponent {
  @Input()
    company!: Company;
    showOfficers: boolean;
    officers: Officer[] = [];
 constructor(public activeModal: NgbActiveModal, private companyService:CompanyService) {
  this.showOfficers = false;
  }
  
  showCompanyOfficer(companyNumber:string){
    this.companyService.searchCompanyOfficers(companyNumber).subscribe((response: any) => {
      this.officers = response.items;
      console.log('this.officers ', this.officers )
      this.showOfficers = true;     
    });
  
  }

}