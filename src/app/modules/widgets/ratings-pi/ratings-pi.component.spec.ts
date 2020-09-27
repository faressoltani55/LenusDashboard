import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsPiComponent } from './ratings-pi.component';

describe('RatingsPiComponent', () => {
  let component: RatingsPiComponent;
  let fixture: ComponentFixture<RatingsPiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingsPiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsPiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
