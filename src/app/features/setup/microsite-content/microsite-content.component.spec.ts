import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositeContentComponent } from './microsite-content.component';

describe('MicrositeContentComponent', () => {
  let component: MicrositeContentComponent;
  let fixture: ComponentFixture<MicrositeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrositeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
