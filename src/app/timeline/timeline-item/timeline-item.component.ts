import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() pastMovie: any;
  @Input() side: number;

  constructor() { }

  ngOnInit() {
  }

}
