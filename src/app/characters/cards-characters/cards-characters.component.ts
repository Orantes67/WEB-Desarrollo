import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs'; 
import { Character, CharacterResponse } from '../interfaces/characters';
import { CharactersService } from '../service/charcaters.service';
import { SharedService } from '../../service/shared-service.service';

@Component({
  selector: 'characters',
  templateUrl: './cards-characters.component.html',
  styleUrls: ['./cards-characters.component.css']
})
export class CardsCharactersComponent implements OnInit {
  characters: Character[] = [];
  selectedCharacters = ['Goku', 'Vegeta', 'Piccolo', 'Freezer', 'Gohan'];

  constructor(
    private charactersService: CharactersService,
    public sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.charactersService.getCharacters().subscribe({
      next: (data: CharacterResponse) => {
        console.log('Respuesta completa de la API (characters):', data); 

        if (!data || !Array.isArray(data.items)) {
          console.error('La respuesta de la API no es válida:', data);
          return;
        }

        const filteredCharacters = data.items.filter(character =>
          this.selectedCharacters.some(selected =>
            character.name.toLowerCase() === selected.toLowerCase()
          )
        );

        console.log('Personajes filtrados (básicos):', filteredCharacters);

           this.getCharacterDetails(filteredCharacters);
      },
      error: (err) => {
        console.error('Error al obtener personajes:', err);
        this.characters = [];
      },
    });
  }

  getCharacterDetails(filteredCharacters: Character[]): void {
    const requests = filteredCharacters.map(character =>
      this.charactersService.getCharacterById(character.id)
    );
  
    forkJoin(requests).subscribe({
      next: (detailedCharacters) => {
        console.log('Detalles completos de los personajes:', detailedCharacters);
  
        // Aseguramos que cada personaje tiene su planeta de origen accesible
        this.characters = detailedCharacters.map(character => ({
          ...character,
          origin: character.originPlanet?.name.toLowerCase() || '',
        }));
  
        this.sharedService.setFilteredCharacters(this.characters);
      },
      error: (err) => {
        console.error('Error al obtener detalles de los personajes:', err);
      },
    });
  }
  
}
