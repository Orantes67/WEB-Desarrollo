import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersModule } from "./characters/characters.module";
import { PlanetsModule } from "./planets/planets.module";
import { TransformacionesComponent } from './transformacion/transformaciones/transformaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    TransformacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    HttpClientModule,
    PlanetsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
