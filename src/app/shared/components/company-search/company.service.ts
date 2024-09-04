import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  searchCompanies(searchTerm: string, page: number): any {
    
    const headers = new HttpHeaders().set('x-api-key', `${this.apiKey}`);
    const apiUrl = `${environment.trunarrativeUrl}/Search?Query=${searchTerm}`;
    return this.http.get(apiUrl, { headers });

  }

  searchCompanyOfficers(companyNumber: string ): any {
    
    const headers = new HttpHeaders().set('x-api-key', `${this.apiKey}`);    
    const apiUrl = `${environment.trunarrativeUrl}/Officers?CompanyNumber=${companyNumber}`;
    return this.http.get(apiUrl, { headers });

  }


  isAuthenticated(): boolean {
    // Mock user authentication
    return true; // or false
  }
}
