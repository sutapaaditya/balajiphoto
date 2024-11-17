import { Component, signal, effect, DestroyRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private platformId = inject(PLATFORM_ID);
  
  timeLeft = signal(9);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      interval(1000).pipe(
        take(9),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(() => {
        this.timeLeft.update(val => {
          if (val === 1) {
            this.router.navigate(['/']);
          }
          return val - 1;
        });
      });
    }
  }
}
