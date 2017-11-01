import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotLocationComponent } from './plot-location.component';

describe('PlotLocationComponent', () => {
  let component: PlotLocationComponent;
  let fixture: ComponentFixture<PlotLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotLocationComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
