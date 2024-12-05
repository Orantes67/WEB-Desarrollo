import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsCharactersComponent } from './characters/cards-characters/cards-characters.component';
import { PlanetsComponent } from './planets/planets/planets.component';

const routes: Routes = [
  { path: 'characters', component: CardsCharactersComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', redirectTo: '/characters' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
