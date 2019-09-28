import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {TableFeed} from '../types/table-feed.type';
import {combineLatest, Observable} from 'rxjs';
import {switchMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-poster-trio',
  templateUrl: './poster-trio.component.html',
  styleUrls: ['./poster-trio.component.scss'],
})
export class PosterTrioComponent implements OnInit {
  posters$: Observable<any>;

  constructor(public api: ApiService) {
  }

  ngOnInit() {
    this.posters$ = this.api.getUpcomingMovies().pipe(
        switchMap(res => combineLatest(
            this.api.getMovieArtUrl(res[0]['Name']),
            this.api.getMovieArtUrl(res[1]['Name']),
            this.api.getMovieArtUrl(res[2]['Name']),
            this.api.getMovieData(res[0]['Name']),
            this.api.getMovieData(res[1]['Name']),
            this.api.getMovieData(res[2]['Name']),
        ).pipe(
            map(([img0, img1, img2, data0, data1, data2]) => {
              res[0].Image = img0;
              res[1].Image = img1;
              res[2].Image = img2;
              res[0].ShortDescription = data0 ? data0.overview : '';
              res[1].ShortDescription = data1 ? data1.overview : '';
              res[2].ShortDescription = data2 ? data2.overview : '';

              return [res[0], res[2], res[1]];
            }),
        )));
  }
}
