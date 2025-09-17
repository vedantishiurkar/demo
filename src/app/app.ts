import { Component } from '@angular/core';
import { HomePage } from './home-page/home-page';
import { Navbar } from './navbar/navbar';
import { LoginPage } from './login-page/login-page';


@Component({
  selector: 'app-root',
  imports: [ HomePage, Navbar, LoginPage ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'demo';
}
