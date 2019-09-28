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
            this.api.getMovieArtUrl(res[2]['Name']),
            this.api.getMovieArtUrl(res[3]['Name']),
        ).pipe(
            map(([img0, img1, img2]) => {
              res[0].Image = img0;
              res[2].Image = img1;
              res[3].Image = img2;

              return res.slice(0,1).concat(res.slice(2,4));
            }),
        )));
  }
}
