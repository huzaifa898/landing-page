import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- import this

@Component({
  selector: 'app-partners-section',
  standalone: true, // <-- important
  imports: [CommonModule], // <-- include this
  templateUrl: './partners-section.component.html',
  styleUrls: ['./partners-section.component.scss']
})
export class PartnersSectionComponent {
  showAll = false;

  allLogos = [
    'assets/image1.png',
    'assets/image2.png',
    'assets/image3.png',
    'assets/image4.png',
    'assets/image5.png',
    'assets/image6.png',
    
  ];

  get visibleLogos() {
    return this.showAll ? this.allLogos : this.allLogos.slice(0, 6);
  }

  get hiddenLogos() {
    return this.allLogos.slice(6);
  }
}
