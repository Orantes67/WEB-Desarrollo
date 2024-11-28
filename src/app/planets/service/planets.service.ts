import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment'; 

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private apiUrl = `${environment.apiUrl}/api/planets`;

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPlanetById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
