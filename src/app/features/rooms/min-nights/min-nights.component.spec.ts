import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinNightsComponent } from './min-nights.component';

describe('MinNightsComponent', () => {
  let component: MinNightsComponent;
  let fixture: ComponentFixture<MinNightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinNightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinNightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
