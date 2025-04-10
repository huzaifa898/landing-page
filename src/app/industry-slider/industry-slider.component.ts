import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-industry-slider',
  templateUrl: './industry-slider.component.html',
  styleUrls: ['./industry-slider.component.scss'],
  imports: [CommonModule]
})
export class IndustrySliderComponent {
  industries = [
    { img: 'assets/slider1.png', title: 'Healthcare & Labs' },
    { img: 'assets/slider2.png', title: 'Construction & Industrial' },
    { img: 'assets/slider1.png', title: 'Law Enforcement & Tactical' },
    { img: 'assets/slider2.png', title: 'Food & Beverage' },
    { img: 'assets/slider2.png', title: 'Food & Beverage' },
  ];

  // You can modify this logic based on how many items you want to show.
  visibleIndustries = this.industries.slice(0, 3); // Show only 5 industries
}
    