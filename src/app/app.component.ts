import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutStatsComponent } from './about-stats/about-stats.component'; // ✅ Import here
import { WhatMakesUsDifferentComponent } from './what-makes-us-different/what-makes-us-different.component';
import { IronGlovePromiseComponent } from './iron-glove-promise/iron-glove-promise.component';
import { QualityAssuranceComponent } from './quality-assurance/quality-assurance.component';
import { IndustrySliderComponent } from './industry-slider/industry-slider.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutStatsComponent,
    WhatMakesUsDifferentComponent,
    IronGlovePromiseComponent,
    QualityAssuranceComponent,
    IndustrySliderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing-page';
  logoPath = 'assets/logo.png';
  ironLogoPath = 'assets/iron-logo.png';
}
