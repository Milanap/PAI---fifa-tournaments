import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentbarComponent } from './tournamentbar.component';

describe('TournamentbarComponent', () => {
  let component: TournamentbarComponent;
  let fixture: ComponentFixture<TournamentbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
