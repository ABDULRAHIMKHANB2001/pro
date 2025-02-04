import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loan-plans',
  templateUrl: './loan-plans.component.html',
  styleUrls: ['./loan-plans.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
})
export class LoanPlansComponent implements OnInit {
  loanPlans: any[] = [];
  isManagerView = false;
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadLoanPlans();
  }

  loadLoanPlans() {
    this.getAllLoanPlans().subscribe((data: any) => {
      this.loanPlans = data;
    });
  }

  toggleView(view: string) {
    this.isManagerView = view === 'manager';
  }

  editPlan(planId: number) {
    // Navigate to EditLoanPlanFormComponent with planId
  }

  getAllLoanPlans(): Observable<any> {
    return this.http.get(`${this.baseUrl}/loanplans`);
  }
}
