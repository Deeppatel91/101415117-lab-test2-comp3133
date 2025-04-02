import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch.models';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches'; // No trailing slash

  constructor(private http: HttpClient) { }

  getAllLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.apiUrl);
  }

  getLaunchByFlightNumber(flightNumber: number): Observable<Launch> {
    return this.http.get<Launch>(`${this.apiUrl}/${flightNumber}`); // Fixed URL construction
  }

  getLaunchesByYear(year: string): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.apiUrl}?launch_year=${year}`);
  }
}