import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardTeamCardComponent } from './leaderboard-team-card.component';

describe('LeaderboardTeamCardComponent', () => {
  let component: LeaderboardTeamCardComponent;
  let fixture: ComponentFixture<LeaderboardTeamCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeaderboardTeamCardComponent]
    });
    fixture = TestBed.createComponent(LeaderboardTeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
