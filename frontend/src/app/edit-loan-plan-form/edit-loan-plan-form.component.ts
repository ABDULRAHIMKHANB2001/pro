import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-loan-plan-form',
  templateUrl: './edit-loan-plan-form.component.html',
  styleUrls: ['./edit-loan-plan-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
})
export class EditLoanPlanFormComponent implements OnInit {
  loanPlan = {
    planId: 0,
    planName: '',
    planValidity: '',
  };
  acknowledgement = false;
  private baseUrl = 'http://localhost:8080/api';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const planId = Number(this.route.snapshot.paramMap.get('planId'));
    this.getLoanPlanById(planId).subscribe((data: any) => {
      this.loanPlan = data;
    });
  }

  onSubmit() {
    this.updateLoanPlan(this.loanPlan).subscribe((response: any) => {
      this.acknowledgement = true;
    });
  }

  getLoanPlanById(planId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/loanplans/${planId}`);
  }

  updateLoanPlan(loanPlan: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/loanplans/${loanPlan.planId}`,
      loanPlan
    );
  }
}
