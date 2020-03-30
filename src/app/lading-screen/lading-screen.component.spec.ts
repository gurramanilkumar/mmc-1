import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadingScreenComponent } from './lading-screen.component';

describe('LadingScreenComponent', () => {
  let component: LadingScreenComponent;
  let fixture: ComponentFixture<LadingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
