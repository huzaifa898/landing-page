import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  // Path to images
  logoPath = 'assets/logo.png';        // Path to logo image
  ironLogoPath = 'assets/iron-logo.png';  // Path to iron logo image
}
