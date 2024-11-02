import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { HomegalleryComponent } from '../homegallery/homegallery.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, HomegalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentImage = '../../assets/frames/frame5.jpg';
  images = [
    '../../assets/frames/frame1.jpg',
    '../../assets/frames/frame2.jpg',
    '../../assets/frames/frame3.jpg',
    '../../assets/frames/frame4.jpg',
    '../../assets/frames/frame5.jpg'
  ];
  currentImageIndex = 0;
  currentIndex = 0;
  prevIndex = -1;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private cdRef: ChangeDetectorRef) {
    if (isPlatformBrowser(this.platformId)) {
      let previousTimestamp = 0;

      const updateImage = (timestamp: number) => {
        if (timestamp - previousTimestamp >= 5000) {
          this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
          this.currentImage = this.images[this.currentImageIndex];
      
          this.cdRef.detectChanges();
      
          previousTimestamp = timestamp;
        }
      
        requestAnimationFrame(updateImage);
      }

      requestAnimationFrame(updateImage);
    }
  }
}
