import { Component } from '@angular/core';
import { HeroComponent } from '../../hero/hero.component';
import { AboutStatsComponent } from '../../about-stats/about-stats.component';
import { WhatMakesUsDifferentComponent } from '../../what-makes-us-different/what-makes-us-different.component';
import { IronGlovePromiseComponent } from '../../iron-glove-promise/iron-glove-promise.component';
import { QualityAssuranceComponent } from '../../quality-assurance/quality-assurance.component';
import { IndustrySliderComponent } from '../../industry-slider/industry-slider.component';
import { PartnersSectionComponent } from '../../components/partners-section/partners-section.component';
import { TeamSliderComponent } from '../../team-slider/team-slider.component';
import { BulkOrderComponent } from '../../bulk-order/bulk-order.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  imports: [
    HeroComponent,
    AboutStatsComponent,
    WhatMakesUsDifferentComponent,
    IronGlovePromiseComponent,
    QualityAssuranceComponent,
    IndustrySliderComponent,
    PartnersSectionComponent,
    TeamSliderComponent,
    BulkOrderComponent
  ]
})
export class AboutUsComponent {}
