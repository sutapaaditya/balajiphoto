import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AsyncPipe } from '@angular/common';
import { MobilenavComponent } from './mobilenav/mobilenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NavbarComponent, MobilenavComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'balajiphoto';

  showNavbar = this.breakpointObserver.observe(['(min-width: 768px)'])
  .pipe(map((result: BreakpointState) => result.matches));

    constructor(private breakpointObserver: BreakpointObserver) {}

}
