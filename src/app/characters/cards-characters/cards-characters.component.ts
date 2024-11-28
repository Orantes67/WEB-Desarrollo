import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../service/charcaters.service';
@Component({
  selector: 'characters',
  templateUrl: './cards-characters.component.html',
  styleUrls: ['./cards-characters.component.css']
})
export class CardsCharactersComponent implements OnInit {
  characters: any[] = []; // Todos los personajes obtenidos de la API
  filteredCharacters: any[] = []; // Solo los personajes que queremos mostrar
  selectedCharacters = ['Goku', 'Vegeta', 'Piccolo', 'Freezer', 'Gohan']; // Personajes a filtrar

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.charactersService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data.items; // Asegúrate de acceder a 'items'
        this.filterCharacters();
      },
      error: (err) => console.error(err),
    });
  }
  
  filterCharacters(): void {
    this.filteredCharacters = this.characters.filter(character =>
      this.selectedCharacters.includes(character.name)
    );
  }
}
