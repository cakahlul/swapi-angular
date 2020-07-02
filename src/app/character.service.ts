import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://swapi.dev/api/people/';
  constructor(private http: HttpClient) { }

  getAllCharacter(): Observable<any> {
    return this.http.get(`${this.baseUrl}?format=json`);
  }

  getDetailCharacter(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}?format=json`);
  }
}
