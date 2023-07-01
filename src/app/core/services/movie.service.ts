import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = '8a4159e6';

  constructor(private http: HttpClient) {}

  getSuggestedMovies(searchTerm: string): Observable<Movie[]> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&type=movie&s=${searchTerm}`;

    return this.http
      .get<any>(url)
      .pipe(map((response) => response.Search || []));
  }
}
