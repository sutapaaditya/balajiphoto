import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homegallery',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homegallery.component.html',
  styleUrl: './homegallery.component.css'
})
export class HomegalleryComponent {
  imagePaths: string[] = [];
  image = '../../assets/homegallery'

  constructor() {
    for (let i = 1; i <= 14; i++) {
      this.imagePaths.push(`../../assets/homegallery/img${i}.jpg`); // Assuming images are named image1.jpg, image2.jpg, etc.
    }
  }
}
