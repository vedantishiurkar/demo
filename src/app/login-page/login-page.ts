import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginComponent {
  constructor(private router: Router){}
  username = '';
  password = '';
  message = '';

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.message = 'Login successful!';
      this.router.navigate(['/layout']);
    } else {
      this.message = 'Invalid credentials.';
    }
  }
}
