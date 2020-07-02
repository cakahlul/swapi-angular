import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private baseUrl = 'https://swapi.dev/api/films/';
  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<any> {
    return this.http.get(`${this.baseUrl}?format=json`);
  }

  getDetailFilms(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}?format=json`);
  }
}
