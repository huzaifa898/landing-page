import { Component } from '@angular/core';
import { HomeHeroComponent } from '../../home-hero/home-hero.component';
import { GloveSectionComponent } from '../../glove-section/glove-section.component';
import { IndustrySliderComponent } from '../../industry-slider/industry-slider.component';
import { BulkOrderComponent } from '../../bulk-order/bulk-order.component';
@Component({
  selector: 'app-home',
  imports: [
    HomeHeroComponent,
    GloveSectionComponent,
    IndustrySliderComponent,
    BulkOrderComponent
    

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
