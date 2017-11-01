import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxNightsComponent } from './max-nights.component';

describe('MaxNightsComponent', () => {
  let component: MaxNightsComponent;
  let fixture: ComponentFixture<MaxNightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxNightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxNightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
