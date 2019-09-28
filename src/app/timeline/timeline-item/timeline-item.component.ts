import { Component, OnInit, Input } from '@angular/core';
import {ShowMetric} from 'src/app/types/showtime.type';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() pastMovie: ShowMetric;
  @Input() side: number;
  @Input() url: string;

  constructor() { 
  }

  ngOnInit() {
  }

}
