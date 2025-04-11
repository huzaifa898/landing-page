import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-team-slider',
  templateUrl: './team-slider.component.html',
  styleUrls: ['./team-slider.component.scss'],
  imports: [CommonModule]
})
export class TeamSliderComponent {
  industries = [
    { img: 'assets/team1.png', title: 'Healthcare & Labs' },
    { img: 'assets/team2.png', title: 'Construction & Industrial' },
    { img: 'assets/team3.png', title: 'Law Enforcement & Tactical' },
    { img: 'assets/team1.png', title: 'Food & Beverage' },
    { img: 'assets/team2.png', title: 'Food & Beverage' },
    { img: 'assets/team3.png', title: 'Law Enforcement & Tactical' },
  ];

  // You can modify this logic based on how many items you want to show.
  visibleIndustries = this.industries.slice(0, 3); // Show only 5 industries
}
    