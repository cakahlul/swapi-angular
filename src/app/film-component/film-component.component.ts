import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmService } from '../film.service';
import { Film } from '../film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.css']
})
export class FilmComponentComponent implements OnInit {

  filmList: Observable<Film[]>;

  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    this.getAllFilm();
  }

  getAllFilm(){
    this.filmList = this.filmService.getAllFilms();
  }

  filmDetail(id: number){
    this.router.navigate(['film/detail', id]);
  }

}
