import { Routes } from '@angular/router';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';
export const routes: Routes = [
  { path: '', component: MissionListComponent },
  {
    path: 'missions/:flightNumber',
    component: MissionDetailsComponent,
    providers: [
      {
        provide: 'getPrerenderParams',
        useValue: () => {
          return [
            { flightNumber: '1' },
            { flightNumber: '2' },
            // Add other flight numbers you want prerendered
          ];
        }
      }
    ]
  },
  { path: '**', redirectTo: '' }
];