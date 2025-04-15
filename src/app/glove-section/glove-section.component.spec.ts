import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloveSectionComponent } from './glove-section.component';

describe('GloveSectionComponent', () => {
  let component: GloveSectionComponent;
  let fixture: ComponentFixture<GloveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GloveSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GloveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
