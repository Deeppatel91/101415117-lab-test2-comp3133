import { Routes } from '@angular/router';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';

export const routes: Routes = [
  { path: '', component: MissionListComponent },
  { 
    path: 'missions/:flightNumber', 
    component: MissionDetailsComponent 
    // No prerender config (renders dynamically at runtime)
  },
  { path: '**', redirectTo: '' }
];