import {Routes } from '@angular/router';
import {LoginComponent} from '../app/login-page/login-page';
import { HomeComponent } from './home-page/home-page';
import { NavbarComponent } from './navbar/navbar';



export const routes: Routes = [
    {path : '', redirectTo : 'login', pathMatch: 'full' }, //default path
    {path : 'login', component : LoginComponent},
    {path : 'home', component : HomeComponent},
    {path : 'navbar', component : NavbarComponent}
];


