import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicecontrolroomComponent } from './policecontrolroom.component';

describe('PolicecontrolroomComponent', () => {
  let component: PolicecontrolroomComponent;
  let fixture: ComponentFixture<PolicecontrolroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicecontrolroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicecontrolroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
