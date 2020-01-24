import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltournamentsComponent } from './alltournaments.component';

describe('AlltournamentsComponent', () => {
  let component: AlltournamentsComponent;
  let fixture: ComponentFixture<AlltournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
