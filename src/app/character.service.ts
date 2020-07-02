import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://swapi.dev/api/people/';
  constructor(private http: HttpClient) { }

  getAllCharacter(): Observable<any> {
    return this.getResults(`${this.baseUrl}?format=json`).pipe(
      map((data: any) => {
        console.log(data.results);
        return data.results
      }));
  }

  getDetailCharacter(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}?format=json`);
  }

  getResults(url: string): Observable<any> {

    return Observable.create((observer) => {

      let request = new XMLHttpRequest();

      request.open('GET', url);

      request.onload = () => {
        if (request.status === 200) {
          observer.next(JSON.parse(request.response));
          observer.complete();
        } else {
          observer.error(new Error(request.statusText));
        }
      }

      request.onerror = () => {
        observer.error(new Error('Unknown error'));
      }

      request.send();
    });

  }
}
