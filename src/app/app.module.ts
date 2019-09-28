import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MetricsComponent} from './metrics/metrics.component';
import { PosterComponent } from './poster/poster.component';
import { PosterTrioComponent } from './poster-trio/poster-trio.component';
import {CardModule} from 'primeng/card';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import { TimelineComponent } from './timeline/timeline.component';
import {TimelineItemComponent} from './timeline/timeline-item/timeline-item.component';
import { LandingComponent } from './layout/landing/landing.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PresentComponent } from './present/present.component';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import { ChairsComponent } from './chairs/chairs.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent,
    PosterTrioComponent,
    MetricsComponent,
    TimelineComponent,
    TimelineItemComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PresentComponent,
    ChairsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    ChartModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
