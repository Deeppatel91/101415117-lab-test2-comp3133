import { Routes } from '@angular/router';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';

export const routes: Routes = [
  { path: '', component: MissionListComponent },
  {
    path: 'missions/:flightNumber',
    component: MissionDetailsComponent,
    data: {
      prerender: {
        getPrerenderParams: () => [
          { flightNumber: '1' },
          { flightNumber: '2' },
          { flightNumber: '3' },
          // Add more flight numbers you want to prerender
        ]
      }
    }
  },
  { path: '**', redirectTo: '' }
];