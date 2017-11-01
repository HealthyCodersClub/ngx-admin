import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityAnalysisComponent } from './availability-analysis.component';

describe('AvailabilityAnalysisComponent', () => {
  let component: AvailabilityAnalysisComponent;
  let fixture: ComponentFixture<AvailabilityAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
