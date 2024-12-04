  import { Injectable } from '@angular/core';
  import { BehaviorSubject } from 'rxjs';
  import { Character } from '../characters/interfaces/characters';

  @Injectable({
    providedIn: 'root'
  })
  export class SharedService {
    private filteredCharactersSource = new BehaviorSubject<Character[]>([]);
    filteredCharacters$ = this.filteredCharactersSource.asObservable();

    setFilteredCharacters(characters: Character[]): void {
      console.log('Enviando personajes filtrados al BehaviorSubject:', characters);
      this.filteredCharactersSource.next(characters);
    }
  }
