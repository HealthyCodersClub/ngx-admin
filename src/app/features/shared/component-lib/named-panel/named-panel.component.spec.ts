import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedPanelComponent } from './named-panel.component';

describe('NamedPanelComponent', () => {
  let component: NamedPanelComponent;
  let fixture: ComponentFixture<NamedPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamedPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
