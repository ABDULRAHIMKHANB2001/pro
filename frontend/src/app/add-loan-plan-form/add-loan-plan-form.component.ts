import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-loan-plan-form',
  templateUrl: './add-loan-plan-form.component.html',
  styleUrls: ['./add-loan-plan-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
})
export class AddLoanPlanFormComponent {
  loanPlan = {
    planName: '',
    loanType: '',
    principalAmount: 0,
    tenure: 1,
    interestRate: 1,
  };
  loanTypes = ['Home Loan', 'Personal Loan', 'Car Loan'];
  acknowledgement = false;
  interestAmount = 0;
  totalPayableAmount = 0;
  emiAmount = 0;
  private baseUrl = 'http://localhost:8080/v1';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.addLoanPlan(this.loanPlan).subscribe((response: any) => {
      this.acknowledgement = true;
      this.interestAmount = response.interestAmount;
      this.totalPayableAmount = response.totalPayableAmount;
      this.emiAmount = response.emiAmount;
    });
  }

  addLoanPlan(loanPlan: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/loanplans`, loanPlan);
  }
}
