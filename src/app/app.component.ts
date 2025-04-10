import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component'; 

@Component({
  selector: 'app-root',
  standalone: true, // 
  imports: [RouterOutlet, HeroComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing-page';
  logoPath = 'assets/Logo.png';  // Define logo path
  
}
