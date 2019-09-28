import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public pastMovies: any[];

  constructor() {
    this.pastMovies = [
      {
        title: 'Joker',
        description: 'This is a good movie about the Joker from Batman.',
        posterUrl: 'unknown at this time'
      },
      {
        title: 'Avengers',
        description: 'This is an awesome movie about the Avengers.',
        posterUrl: 'unknown at this time'
      },
      {
        title: 'Avengers: Age of Ultron',
        description: 'This is another okay movie about the Avengers.',
        posterUrl: 'unknown at this time'
      },
      {
        title: 'Scott Pilgrim vs. the World',
        description: 'Great movie. Great music',
        posterUrl: 'unknown at this time'
      }
    ]
  }

  ngOnInit() {
    
  }

}
