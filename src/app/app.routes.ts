import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'league/:leagueId', loadComponent: () => import('./features/leaderboard/leaderboard.component').then(mod => mod.LeaderboardComponent)},
  {path: 'league/:leagueId/team/:teamId/history', loadComponent: () => import('./features/team-history/team-history.component').then(mod => mod.TeamHistoryComponent)},
  {path: '**', loadComponent: () => import('./app.component').then(mod => mod.AppComponent)},

];
