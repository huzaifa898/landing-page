import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrySliderComponent } from './industry-slider.component';

describe('IndustrySliderComponent', () => {
  let component: IndustrySliderComponent;
  let fixture: ComponentFixture<IndustrySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrySliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
