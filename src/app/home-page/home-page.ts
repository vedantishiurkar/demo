import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home-page',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomeComponent {
 

}
