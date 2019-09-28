import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {ShowMetric} from '../types/showtime.type';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public pastMovies: ShowMetric[];

  constructor(public api: ApiService) {
    this.api.getShows().subscribe(shows => {
      this.pastMovies = shows;
    });
  }

  ngOnInit() {
    
  }

}
