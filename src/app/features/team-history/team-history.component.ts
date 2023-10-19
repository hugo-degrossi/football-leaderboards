import { Component, Input, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { TeamService } from 'src/app/core/services/team.service';
import { Observable } from 'rxjs';
import { IFixtureData } from 'src/app/shared/models/fixture/IFixturesResponse';
import { FixtureCardComponent } from './fixture-card/fixture-card.component';
import { PrimaryButtonComponent } from 'src/app/shared/components/primary-button/primary-button.component';

@Component({
  selector: 'app-team-history',
  standalone: true,
  imports: [CommonModule, FixtureCardComponent, PrimaryButtonComponent],
  templateUrl: './team-history.component.html',
  styleUrls: ['./team-history.component.scss']
})
export class TeamHistoryComponent {
  @Input()
  teamId!: string;
  @Input()
  leagueId!: string;

  private fixtureService: TeamService = inject(TeamService)
  private location: Location = inject(Location);
  protected fixtures$!: Observable<IFixtureData[]>;
  

  ngOnInit(): void {
      this.fixtures$ = this.fixtureService.getByIds(this.leagueId, this.teamId)
  }

  goBack(): void {
    this.location.back()
  } 

}
