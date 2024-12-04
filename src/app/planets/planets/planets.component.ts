import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../service/planets.service';
import { Planet } from '../interface/planets';
import { SharedService } from '../../service/shared-service.service';
import { Character } from '../../characters/interfaces/characters';
@Component({
  selector: 'planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  filteredPlanets: Planet[] = [];

  constructor(
    private planetsService: PlanetsService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getPlanets();

    
    this.sharedService.filteredCharacters$.subscribe((characters) => {
      if (characters.length > 0) {
        console.log('Personajes recibidos para comparación:', characters);
        this.filterPlanetsByCharacters(characters);
      }
    });
  }

  getPlanets(): void {
    this.planetsService.getPlanets().subscribe({
      next: (data) => {
        this.planets = data;
        console.log('Planetas obtenidos:', this.planets);
      },
      error: (err) => console.error('Error al obtener planetas:', err),
    });
  }

  filterPlanetsByCharacters(characters: Character[]): void {
    const characterPlanets = characters
      .map((character) => character.origin) // Usamos la propiedad `origin`
      .filter((planet, index, self) => planet && self.indexOf(planet) === index);
  
    console.log('Planetas asociados a personajes:', characterPlanets);
  
    this.filteredPlanets = this.planets.filter((planet) =>
      characterPlanets.includes(planet.name.toLowerCase())
    );
  
    console.log('Planetas filtrados:', this.filteredPlanets);
  }
  
}
