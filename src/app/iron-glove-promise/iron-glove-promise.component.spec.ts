import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronGlovePromiseComponent } from './iron-glove-promise.component';

describe('IronGlovePromiseComponent', () => {
  let component: IronGlovePromiseComponent;
  let fixture: ComponentFixture<IronGlovePromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IronGlovePromiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IronGlovePromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
