import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFixture } from 'src/app/shared/models/fixture/IFixture';
import { IFixtureData } from 'src/app/shared/models/fixture/IFixturesResponse';

@Component({
  selector: 'app-fixture-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fixture-card.component.html',
  styleUrls: ['./fixture-card.component.scss']
})
export class FixtureCardComponent {
  @Input()
  fixture!: IFixtureData
}
