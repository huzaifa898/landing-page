import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import this

@Component({
  selector: 'app-contact-hero',
  imports: [ CommonModule, RouterModule],
  templateUrl: './contact-hero.component.html',
  styleUrl: './contact-hero.component.scss'
})
export class ContactHeroComponent {
  logoPath = 'assets/logo.png';
  heroImagePath = 'assets/gloves.png';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
