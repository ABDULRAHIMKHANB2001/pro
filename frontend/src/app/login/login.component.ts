import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
})
export class LoginComponent {
  loginData = {
    username: '',
    password: '',
  };
  errorMessage = '';
  private baseUrl = 'http://localhost:8080/v1';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.login(this.loginData).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        // Handle login error
        this.errorMessage = 'Invalid username or password';
      }
    );
  }

  login(loginData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginData);
  }
}
