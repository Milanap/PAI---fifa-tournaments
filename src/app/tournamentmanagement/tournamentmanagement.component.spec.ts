import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentmanagementComponent } from './tournamentmanagement.component';

describe('TournamentmanagementComponent', () => {
  let component: TournamentmanagementComponent;
  let fixture: ComponentFixture<TournamentmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
