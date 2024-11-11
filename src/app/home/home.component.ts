import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { HomegalleryComponent } from '../homegallery/homegallery.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, HomegalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('1500ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  currentImage = signal('../../assets/frames/frame5.jpg');
  fadeState = signal(0);
  
  images = [
    '../../assets/frames/frame1.jpg',
    '../../assets/frames/frame2.jpg',
    '../../assets/frames/frame3.jpg',
    '../../assets/frames/frame4.jpg',
    '../../assets/frames/frame5.jpg'
  ];
  currentImageIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private cdRef: ChangeDetectorRef) {
    if (isPlatformBrowser(this.platformId)) {
      let previousTimestamp = 0;

      const updateImage = (timestamp: number) => {
        if (timestamp - previousTimestamp >= 5000) {
          this.fadeState.update(state => state + 1);
          this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
          this.currentImage.set(this.images[this.currentImageIndex]);
          previousTimestamp = timestamp;
        }
        requestAnimationFrame(updateImage);
      }

      requestAnimationFrame(updateImage);
    }
  }
}
