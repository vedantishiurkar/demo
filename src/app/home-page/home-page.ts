import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-home-page',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomeComponent implements OnInit , OnDestroy {
 images = [
    'assets/robot1.jpeg',
    'assets/robot2.jpeg',
    'assets/robot3.jpeg'
  ];

  image: string = 'assets/robot1.jpeg';

  currentIndex = 0;
  intervalId: any;
  

  ngOnInit() {
    // this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  }

   

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // prevent memory leak
  }
}


