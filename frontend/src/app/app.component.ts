import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Loan Management System</h1>
      <app-login></app-login>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, LoginComponent],
})
export class AppComponent {
  title = 'loan-management-system';
}
