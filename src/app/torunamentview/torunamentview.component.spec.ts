import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorunamentviewComponent } from './torunamentview.component';

describe('TorunamentviewComponent', () => {
  let component: TorunamentviewComponent;
  let fixture: ComponentFixture<TorunamentviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorunamentviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorunamentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
