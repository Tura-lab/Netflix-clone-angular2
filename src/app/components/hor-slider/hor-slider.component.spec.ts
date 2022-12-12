import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorSliderComponent } from './hor-slider.component';

describe('HorSliderComponent', () => {
  let component: HorSliderComponent;
  let fixture: ComponentFixture<HorSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
