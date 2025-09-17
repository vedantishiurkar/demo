import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  username = '';
  password = '';
  message = '';

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.message = 'Login successful!';
    } else {
      this.message = 'Invalid credentials.';
    }
  }
}
