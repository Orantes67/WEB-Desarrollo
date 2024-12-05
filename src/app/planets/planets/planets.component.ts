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
    // Obtén los planetas al iniciar el componente
    this.getPlanets();

    // Escucha los personajes filtrados desde el servicio compartido
    this.sharedService.filteredCharacters$.subscribe((characters) => {
      if (characters.length > 0) {
        console.log('Personajes recibidos para comparación:', characters);
        this.filterPlanetsByCharacters(characters);
      } else {
        // Si no hay personajes, mostramos todos los planetas
        this.filteredPlanets = this.planets;
      }
    });
  }

  // Obtiene los planetas desde el servicio
  getPlanets(): void {
    this.planetsService.getPlanets().subscribe({
      next: (data) => {
        this.planets = data;
        console.log('Planetas obtenidos:', this.planets);
        // Inicialmente, si no hay personajes, mostrar todos los planetas
        this.filteredPlanets = this.planets;
      },
      error: (err) => console.error('Error al obtener planetas:', err),
    });
  }

  // Filtra los planetas en base a los personajes
  filterPlanetsByCharacters(characters: Character[]): void {
    const characterPlanets = characters
      .map((character) => character.origin) // Usamos la propiedad `origin`
      .filter((planet, index, self) => planet && self.indexOf(planet) === index);

    console.log('Planetas asociados a personajes:', characterPlanets);

    // Filtra los planetas que están en la lista de planetas asociados a personajes
    this.filteredPlanets = this.planets.filter((planet) =>
      characterPlanets.includes(planet.name.toLowerCase())
    );

    console.log('Planetas filtrados:', this.filteredPlanets);
  }
}
