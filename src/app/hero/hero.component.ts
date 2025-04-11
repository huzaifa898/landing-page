import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Needed for ngClass

@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [CommonModule] // ✅ Add CommonModule here
})
export class HeroComponent {
  logoPath = 'assets/logo.png';
  ironLogoPath = 'assets/iron-logo.png';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
