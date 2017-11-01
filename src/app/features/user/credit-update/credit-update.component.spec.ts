import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditUpdateComponent } from './credit-update.component';

describe('CreditUpdateComponent', () => {
  let component: CreditUpdateComponent;
  let fixture: ComponentFixture<CreditUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
