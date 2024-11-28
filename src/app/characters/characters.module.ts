import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsCharactersComponent } from './cards-characters/cards-characters.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CardsCharactersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],exports:[
    CardsCharactersComponent
  ]
})
export class CharactersModule { }
