import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getMovieData('Avatar').subscribe(res => {
      console.log(res);
    });
    this.api.getMovieArtUrl('Avatar').subscribe(res => {
      console.log(res);
    });
    this.api.getUpcomingMovies().subscribe(res => {
      console.log(res);
    });
  }

}
