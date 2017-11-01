import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAnalysisComponent } from './booking-analysis.component';

describe('BookingAnalysisComponent', () => {
  let component: BookingAnalysisComponent;
  let fixture: ComponentFixture<BookingAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingAnalysisComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
