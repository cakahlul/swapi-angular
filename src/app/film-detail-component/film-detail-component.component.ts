import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail-component',
  templateUrl: './film-detail-component.component.html',
  styleUrls: ['./film-detail-component.component.css']
})
export class FilmDetailComponentComponent implements OnInit {

  id: number;
  film: Film;

  constructor(private route: ActivatedRoute,private router: Router,
    private filmService: FilmService) { }

  ngOnInit() {
    this.film = new Film();

    this.id = this.route.snapshot.params['id'];
    
    this.filmService.getDetailFilms(this.id)
      .subscribe(data => {
        this.film = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['film']);
  }

}
