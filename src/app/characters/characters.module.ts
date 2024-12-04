import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsCharactersComponent } from './cards-characters/cards-characters.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PlanetsModule } from "../planets/planets.module"; 

@NgModule({
  declarations: [
    CardsCharactersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    PlanetsModule
],
  exports: [
    CardsCharactersComponent
  ]
})
export class CharactersModule { }
