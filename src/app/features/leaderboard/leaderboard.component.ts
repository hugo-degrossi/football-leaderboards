import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { countries } from 'src/app/core/constants/countries';
import { LeaderboardService } from 'src/app/core/services/leaderboard.service';
import { ILeaderboard } from 'src/app/shared/models/standing/ILeaderboard';
import { Observable } from 'rxjs';
import { LeaderboardTeamCardComponent } from './leaderboard-team-card/leaderboard-team-card.component';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, LeaderboardTeamCardComponent],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leagueId: string = ""

  private _activatedRouter = inject(ActivatedRoute);
  private leaderboardService = inject(LeaderboardService);
  protected leaderboard$!: Observable<ILeaderboard>;

  constructor() {
    this._activatedRouter.paramMap.subscribe(params => {
      this.ngOnInit();
    })
  }

  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    this.leagueId = this._activatedRouter.snapshot.paramMap.get("leagueId") ?? countries[0].code;
    this.leaderboard$ = this.leaderboardService.getById(this.leagueId);
  }
}
