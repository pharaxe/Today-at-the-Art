import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import {TimelineComponent} from './timeline.component';



@NgModule({
  declarations: [
    TimelineComponent,
    TimelineItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TimelineModule { }
