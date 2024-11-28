import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransformationsService {
  private apiUrl = 'https://dragonball-api.com/api/transformations';
  private transformationsSource = new BehaviorSubject<any[]>([]); // Usamos BehaviorSubject para emitir los datos
  transformations$ = this.transformationsSource.asObservable(); // Observable para ser consumido por el componente

  constructor(private http: HttpClient) {}

  // Método para obtener las transformaciones desde la API
  fetchTransformations(): void {
    console.log('Llamando a la API...');
    this.http.get<any>(this.apiUrl).subscribe({
      next: (response) => {
        console.log('Datos recibidos:', response); // Verifica la respuesta completa de la API

        // Limita los datos a solo los primeros 38 elementos
        const limitedData = response.slice(0, 30); // Solo los primeros 38 elementos

        // Emitir los primeros 38 datos al componente
        this.transformationsSource.next(limitedData); // Emite los datos limitados al componente
      },
      error: (err) => {
        console.error('Error al cargar las transformaciones:', err);
        this.transformationsSource.next([]); // En caso de error, emite un arreglo vacío
      },
    });
  }
}
