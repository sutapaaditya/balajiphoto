import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobilenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobilenav.component.html',
  styleUrl: './mobilenav.component.css'
})
export class MobilenavComponent {
  active: Boolean = false;

  onHamClick(ev: Event) {
    this.active = !this.active;
  }

}
