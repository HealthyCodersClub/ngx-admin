import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRatesComponent } from './daily-rates.component';

describe('DailyRatesComponent', () => {
  let component: DailyRatesComponent;
  let fixture: ComponentFixture<DailyRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
