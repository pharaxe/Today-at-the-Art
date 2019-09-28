import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DiagnosisComponent} from './diagnosis/diagnosis.component';
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

@NgModule({
  declarations: [
    AppComponent,
    DiagnosisComponent,
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
    AppRoutingModule,
    ChartModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
