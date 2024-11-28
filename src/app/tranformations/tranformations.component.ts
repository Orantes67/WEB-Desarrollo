import { Component, OnInit } from '@angular/core';
import { TransformationsService } from '../characters/service/transformations.service';

@Component({
  selector: 'app-transformations',
  templateUrl: './tranformations.component.html',
  styleUrls: ['./tranformations.component.css'],
})
export class TransformationsComponent implements OnInit {
  transformations: any[] = []; // Para almacenar las transformaciones
  loading = true; // Estado de carga

  constructor(private transformationsService: TransformationsService) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener las transformaciones filtradas
    this.transformationsService.fetchTransformations();
  
    // Subscribirse al observable para obtener los datos actualizados
    this.transformationsService.transformations$.subscribe({
      next: (data) => {
        console.log('Datos recibidos en el componente:', data); // Verifica aquí
        this.transformations = data; // Asignamos los datos al arreglo de transformaciones
        console.log('Transformaciones asignadas:', this.transformations); // Verifica si los datos llegan aquí
        this.loading = false; // Ya no estamos cargando
      },
      error: (err) => {
        console.error('Error al cargar las transformaciones:', err);
        this.loading = false;
      },
    });
  }
  
  
}
