import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsCharactersComponent } from './cards-characters/cards-characters.component';


@NgModule({
  declarations: [
    CardsCharactersComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    CardsCharactersComponent
  ]
})
export class CharactersModule { }
