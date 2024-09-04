// company-search.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanySearchComponent } from './company-search';
import { CompanyService } from './company.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

describe('CompanySearchComponent', () => {
  let component: CompanySearchComponent;
  let fixture: ComponentFixture<CompanySearchComponent>;
  let companyService: CompanyService;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanySearchComponent],
      providers: [CompanyService, NgbModal],
      imports: [ReactiveFormsModule, NgIf, NgFor],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchComponent);
    component = fixture.componentInstance;
    companyService = TestBed.inject(CompanyService);
    modalService = TestBed.inject(NgbModal);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a search form', () => {
    expect(component.searchForm).toBeDefined();
  });

  it('should have a search button', () => {
    const searchButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(searchButton).toBeDefined();
  });

  it('should call searchCompanies on search button click', () => {
    const searchButton = fixture.nativeElement.querySelector('button[type="submit"]');
    spyOn(component, 'searchCompanies');
    searchButton.click();
    expect(component.searchCompanies).toHaveBeenCalledTimes(1);
  });

  it('should call companyService.searchCompanies on searchCompanies', () => {
    spyOn(companyService, 'searchCompanies');
    component.searchCompanies();
    expect(companyService.searchCompanies).toHaveBeenCalledTimes(1);
  });

  it('should open modal on viewCompanyDetails', () => {
    const company = { name: 'Test Company' };
    spyOn(modalService, 'open');
    component.viewCompanyDetails(company);
    expect(modalService.open).toHaveBeenCalledTimes(1);
  });
});