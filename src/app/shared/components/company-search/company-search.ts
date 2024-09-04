import { Component,  } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Company } from './company.model';
import { CompanyService } from './company.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyDetailsModalComponent } from './company-details.component';
import { NoAccessModalComponent } from './no-access.component';


@Component({
  selector: 'company-search',
  templateUrl: './company-search.html',
  styleUrls: ['./company-search.css'],
  standalone  : true,
  imports:[ReactiveFormsModule, NgIf, NgFor]
})
export class CompanySearchComponent {
  title = 'angular-starter-kit';

  searchForm!: FormGroup;

  companies: Company[] = [];
  totalResults: number | undefined;
  currentPage: number = 1;
  modalService: NgbModal
  searchComplete:boolean=false;

  constructor(private companyService: CompanyService, ) {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl('', Validators.required),
    });
    this.modalService = new NgbModal()
  }

  searchCompanies(): void {
    if (this.searchForm && this.searchForm.valid) {
      const searchTerm: string = this.searchForm.get('searchTerm')?.value;

      this.companyService.searchCompanies(searchTerm, this.currentPage).subscribe((response: any) => {
        console.log(" response.item",  response.items)
         if ( response.items &&  response.items.length){
          this.companies = response.items;
          this.totalResults = response.total_results;
         }
         this.searchComplete = true;
      });
    }
  }

  viewCompanyDetails(company: Company): void {
    // Mock user authentication
    if (this.companyService.isAuthenticated()) {
      // Open modal
      const modalRef = this.modalService.open(CompanyDetailsModalComponent);
      modalRef.componentInstance.company = company;
    } else {
      const noAccessModalRef = this.modalService.open(NoAccessModalComponent);
      noAccessModalRef.componentInstance.info = 'Access denied. Please login to view company details.';
      console.log('Access denied. Please login to view company details.');
    }
  }

}
