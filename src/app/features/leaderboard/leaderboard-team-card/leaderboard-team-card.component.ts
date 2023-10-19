import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IStanding } from 'src/app/shared/models/standing/IStanding';

@Component({
  selector: 'app-leaderboard-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard-team-card.component.html',
  styleUrls: ['./leaderboard-team-card.component.scss']
})
export class LeaderboardTeamCardComponent {

  @Input()
  standing!: IStanding;
  @Input()
  leagueId!: string;

  private router: Router = inject(Router)

  goToTeamHistory(): void {
    this.router.navigate([
      'league', this.leagueId, 'team', this.standing.team.id, 'history'
    ])
  }
}
