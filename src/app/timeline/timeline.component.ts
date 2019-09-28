import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {ShowMetric} from '../types/showtime.type';
import {from} from 'rxjs';
import {toArray, concatMap, map} from 'rxjs/operators';

export interface ShowWithImageUrl extends ShowMetric {
  movieArtUrl: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public pastMovies: ShowMetric[];

  constructor(public api: ApiService) {
    this.api.getShows().subscribe(shows => {
      from(shows).pipe(
        concatMap(show => this.api.getMovieArtUrl(show.EventName).pipe(
          map(movieArtUrl => ({...show, movieArtUrl}))
        )),
        toArray()
      ).subscribe(movies => {
         this.pastMovies = movies;
      });
    });
  }

  ngOnInit() {
  }

}
