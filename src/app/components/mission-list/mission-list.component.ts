import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../../services/space-x.service';
import { Launch } from '../../models/launch.models';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { MissionFilterComponent } from '../mission-filter/mission-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'; // Make sure this is imported
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    RouterModule,
    MatIconModule, // Make sure this is in the imports array
    MissionFilterComponent,
    MatFormFieldModule,
    MatSelectModule,
    TruncatePipe
  ],
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})

export class MissionListComponent implements OnInit {
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  isLoading = true;
  error = '';

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.loadLaunches();
  }

  getLandingSuccess(launch: Launch): string {
    const firstCore = launch.rocket?.first_stage?.cores[0];
    if (firstCore?.land_success === null || firstCore?.land_success === undefined) {
      return 'Unknown';
    }
    return firstCore.land_success ? 'Yes' : 'No';
  }

  loadLaunches(): void {
    this.isLoading = true;
   // console.log('Fetching launches...'); // Debug log
    this.spaceXService.getAllLaunches().subscribe({
      next: (launches) => {
       // console.log('Launches received:', launches); // Debug log
        this.launches = launches;
        this.filteredLaunches = [...launches];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching launches:', err); // Debug log
        this.error = 'Failed to load launches. Please try again later.';
        this.isLoading = false;
      }
    });
  }
  
  applyFilters(filters: any): void {
    this.isLoading = true;
    
    let filtered = [...this.launches];
    
    if (filters.year) {
      filtered = filtered.filter(launch => launch.launch_year === filters.year);
    }
    
    if (filters.launchSuccess !== null && filters.launchSuccess !== undefined) {
      filtered = filtered.filter(launch => {
        return launch.launch_success === (filters.launchSuccess === 'true');
      });
    }
    
    if (filters.landSuccess !== null && filters.landSuccess !== undefined) {
      filtered = filtered.filter(launch => {
        const firstCore = launch.rocket?.first_stage?.cores[0];
        return firstCore?.land_success === (filters.landSuccess === 'true');
      });
    }
    
    this.filteredLaunches = filtered;
    this.isLoading = false;
  }
}