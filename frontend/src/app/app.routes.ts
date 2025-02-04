import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddLoanPlanFormComponent } from './add-loan-plan-form/add-loan-plan-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'add-loan-plan', component: AddLoanPlanFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  // Add other routes here
];
