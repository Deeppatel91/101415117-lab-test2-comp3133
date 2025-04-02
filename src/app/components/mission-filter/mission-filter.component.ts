import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon'; // Add this import

@Component({
  selector: 'app-mission-filter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule // Add this to imports
  ],
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionFilterComponent {
  @Output() filtersChanged = new EventEmitter<any>();
  
  years: string[] = [
    '2006', '2007', '2008', '2009', '2010', 
    '2011', '2012', '2013', '2014', '2015',
    '2016', '2017', '2018', '2019', '2020',
    '2021', '2022', '2023', '2024'
  ];
  
  filters = {
    year: '',
    launchSuccess: null,
    landSuccess: null
  };

  applyFilters(): void {
    this.filtersChanged.emit(this.filters);
  }

  resetFilters(): void {
    this.filters = {
      year: '',
      launchSuccess: null,
      landSuccess: null
    };
    this.filtersChanged.emit(this.filters);
  }
}