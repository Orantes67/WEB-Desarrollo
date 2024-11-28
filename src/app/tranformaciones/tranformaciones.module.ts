import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformationsComponent } from '../tranformations/tranformations.component';



@NgModule({
  declarations: [
   TransformationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
   TransformationsComponent
  ]
})
export class TranformacionesModule { }
