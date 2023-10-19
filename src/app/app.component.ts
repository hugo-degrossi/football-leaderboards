import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './core/components/menu/menu.component';
import { ThemeService } from './core/services/theme.service';
import { PrimaryButtonComponent } from './shared/components/primary-button/primary-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent, PrimaryButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'football-leaderboards';

  private themeService: ThemeService = inject(ThemeService)

  ngOnInit() {
    this.themeService.set('light')
  }

  changeTheme() {
    this.themeService.activeTheme === 'light' 
    ? this.themeService.set('dark') 
    : this.themeService.set('light')
  }
  
}
