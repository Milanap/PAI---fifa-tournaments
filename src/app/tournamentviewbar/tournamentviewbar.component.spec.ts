import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentviewbarComponent } from './tournamentviewbar.component';

describe('TournamentviewbarComponent', () => {
  let component: TournamentviewbarComponent;
  let fixture: ComponentFixture<TournamentviewbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentviewbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentviewbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
