import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { countries } from '../../constants/countries';
import { Router } from '@angular/router';
import { ICountry } from 'src/app/shared/models/standing/ICountry';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  countries: ICountry[] = countries;

  private router: Router = inject(Router)

  goToLeaderboard(country: ICountry) {
    this.router.navigate(
      ['/league', country.code]
      )
  }

}
