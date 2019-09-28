import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {combineLatest} from 'rxjs';
import {TableFeed} from '../types/table-feed.type';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {

  public latest = {};

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getUpcomingMovies().subscribe(res => {
      this.latest = res as TableFeed[];

      combineLatest(
        this.api.getMovieArtUrl(this.latest[0]['Name']),
        this.api.getMovieArtUrl(this.latest[1]['Name']),
        this.api.getMovieArtUrl(this.latest[2]['Name'])
      ).subscribe(([img0, img1, img2]) => {
        this.latest[0].image = img0;
        this.latest[1].image = img1;
        this.latest[2].image = img2;
      }, error => { /* silence is golden. */ });
    });
  }

}
