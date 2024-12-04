import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { Planet, PlanetResponse } from '../interface/planets';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private apiUrl = `${environment.apiUrl}/planets`;

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Planet[]> {
    return this.http.get<PlanetResponse>(this.apiUrl).pipe(
      map(response => response.items)  
    );
  }

  getPlanetById(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${this.apiUrl}/${id}`);
  }
}
