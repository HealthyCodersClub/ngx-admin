import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelManagerComponent } from './channel-manager.component';

describe('ChannelManagerComponent', () => {
  let component: ChannelManagerComponent;
  let fixture: ComponentFixture<ChannelManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelManagerComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
