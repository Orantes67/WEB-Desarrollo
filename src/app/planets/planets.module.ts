import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets/planets.component';



@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PlanetsComponent
  ]
})
export class PlanetsModule { }
