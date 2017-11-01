import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitBookingComponent } from './submit-booking.component';

describe('SubmitBookingComponent', () => {
  let component: SubmitBookingComponent;
  let fixture: ComponentFixture<SubmitBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitBookingComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
