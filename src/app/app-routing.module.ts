import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmComponentComponent } from './film-component/film-component.component';
import { FilmDetailComponentComponent } from './film-detail-component/film-detail-component.component';
import { CharacterComponentComponent } from './character-component/character-component.component';
import { CharacterDetailComponentComponent } from './character-detail-component/character-detail-component.component';

const routes: Routes = [
    {path: '', redirectTo: 'film', pathMatch: 'full'},
    {path: 'film', component:FilmComponentComponent},
    {path: 'film/detail/:id', component:FilmDetailComponentComponent},
    {path: 'character', component:CharacterComponentComponent},
    {path: 'character/detail/:id', component:CharacterDetailComponentComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }