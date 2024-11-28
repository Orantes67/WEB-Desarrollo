import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../service/planets.service';
@Component({
  selector: 'planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: any[] = [];

  constructor(private planetsService: PlanetsService) {}

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(): void {
    this.planetsService.getPlanets().subscribe({
      next: (data) => this.planets = data.items, 
      error: (err) => console.error(err),
    });
  }
}
