import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXService } from '../../services/space-x.service';
import { Launch } from '../../models/launch.models';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Location } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {
  launch: Launch | null = null;
  isLoading = true;
  error = '';

  constructor(
    private spaceXService: SpaceXService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadLaunchDetails(+id);
    } else {
      this.error = 'No flight number provided';
      this.isLoading = false;
    }
  }

  loadLaunchDetails(id: number): void {
    this.isLoading = true;
    this.spaceXService.getLaunchByFlightNumber(id).subscribe({
      next: (launch) => {
        this.launch = launch;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load mission details. Please try again later.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  getLaunchFailureDetails(): string {
    if (!this.launch?.launch_failure_details) return 'No failure details available';
    const details = this.launch.launch_failure_details;
    return `Failure at ${details.time} seconds${details.altitude ? ` (altitude: ${details.altitude} meters)` : ''}. Reason: ${details.reason}`;
  }

  getLandingSuccess(launch: Launch): string {
    const firstCore = launch.rocket?.first_stage?.cores[0];
    if (firstCore?.land_success === null || firstCore?.land_success === undefined) {
      return 'Unknown';
    }
    return firstCore.land_success ? 'Yes' : 'No';
  }

  goBack(): void {
    this.location.back();
  }
}