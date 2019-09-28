import {Component, OnInit, Input, HostListener} from '@angular/core';
import {AnimationEvent} from '@angular/animations';
import {HoverContainerAnimations} from './poster.animations';
import {TableFeed} from '../types/table-feed.type';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
  animations: HoverContainerAnimations,
})
export class PosterComponent implements OnInit {
  @Input() poster: TableFeed;

  state;

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onHover(event: MouseEvent) {
    const direction = event.type === 'mouseenter' ? 'in':'out';
    const host = event.target as HTMLElement;
    const w = host.offsetWidth;
    const h = host.offsetHeight;

    const x = (event.pageX - host.offsetLeft - (w / 2)) * (w > h ? (h / w):1);
    const y = (event.pageY - host.offsetTop - (h / 2)) * (h > w ? (w / h):1);
    const states = ['top', 'right', 'bottom', 'left'];
    const side = Math.round(
        (((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    this.state = `${direction}-${states[side]}`;

  }

  onDone(event: AnimationEvent) {
    this.state = event.toState.startsWith('out-') ? null:this.state;
  }

  constructor() {
  }

  ngOnInit() {
    console.log(this.poster);
  }

  buyTicket() {
    window.open(this.poster.InfoLink, "_blank");
  }
}
