// app.routes.ts
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
        provide: 'PRERENDER_PATHS',
        useValue: ['1', '2', '3', '4', '5'] // List of flight numbers to prerender
      }
    ]
  },
  { path: '**', redirectTo: '' }
];