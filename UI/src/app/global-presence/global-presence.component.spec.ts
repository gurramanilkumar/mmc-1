import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPresenceComponent } from './global-presence.component';

describe('GlobalPresenceComponent', () => {
  let component: GlobalPresenceComponent;
  let fixture: ComponentFixture<GlobalPresenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPresenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
