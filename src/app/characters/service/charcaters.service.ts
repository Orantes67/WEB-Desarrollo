
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { Character, CharacterResponse } from '../interfaces/characters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private apiUrl = `${environment.apiUrl}/characters`;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(this.apiUrl);
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}

