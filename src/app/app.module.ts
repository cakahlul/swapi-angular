import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilmComponentComponent } from './film-component/film-component.component';
import { FilmDetailComponentComponent } from './film-detail-component/film-detail-component.component';
import { CharacterComponentComponent } from './character-component/character-component.component';
import { CharacterDetailComponentComponent } from './character-detail-component/character-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponentComponent,
    FilmDetailComponentComponent,
    CharacterComponentComponent,
    CharacterDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
