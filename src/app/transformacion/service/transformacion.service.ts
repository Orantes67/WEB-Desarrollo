import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TransformacionService {
  private apiUrl = `${environment.apiUrl}/characters`;
  constructor() { }
}
