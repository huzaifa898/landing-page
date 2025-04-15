import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import this

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [
    CommonModule,
    RouterModule // ✅ Add this to make routerLink work
  ]
})
export class HeroComponent {
  logoPath = 'assets/logo.png';
  ironLogoPath = 'assets/iron-logo.png';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
