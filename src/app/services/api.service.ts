import {Injectable} from '@angular/core';
import {ApiData} from '../types/api-data.type';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TableFeed} from '../types/table-feed.type';
import {Observable, of} from 'rxjs';
import {ShowMetric} from '../types/showtime.type';
const api: ApiData = require('../../assets/api.json');
const shows: ShowMetric[] = require('../../assets/datasets/json/ticket-sales-by-showtime.json');
const API_KEY = '04598f9eaac7d48d07637ea767e09824';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getMovieArtUrl(title): Observable<string> {
    if (api[title]) {
      return of('https://image.tmdb.org/t/p/w600_and_h900_bestv2' + api[title].poster_path);
    } else {
      return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURI(title)}&page=1&include_adult=false`).pipe(
        map(res => res['results'][0] ? 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + res['results'][0].poster_path : null)
      );
    }
  }

  public getUpcomingMovies(): Observable<TableFeed[]> {
    return this.http.get('http://prod1.agileticketing.net/websales/feed.ashx?guid=4a87ad2b-6f0b-450e-8a5f-a601a964f866&showslist=true&format=json&').pipe(
      map(res => res['ArrayOfShows'])
    );
  }

  public getMovieData(title): Observable<ApiData> {
    if (api[title]) {
      return api[title];
    } else {
      return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURI(title)}&page=1&include_adult=false`).pipe(
        map(res => res['results'][0] ? res['results'][0] : null)
      );
    }
  }

  public getShows(): Observable<ShowMetric[]> {
    return of(shows);
  }
}
