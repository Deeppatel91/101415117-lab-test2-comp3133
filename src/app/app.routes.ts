import { Routes } from '@angular/router';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';

export const routes: Routes = [
  { 
    path: '', 
    component: MissionListComponent 
  },
  { 
    path: 'missions/:id', 
    component: MissionDetailsComponent,
    // Change renderMode to 'client-side-only' to completely disable SSR for this route
    data: { 
      renderMode: 'client-side-only' 
    } 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];