import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DiagnosisComponent} from './diagnosis/diagnosis.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import { LandingComponent } from './layout/landing/landing.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PresentComponent } from './content/present/present.component';
import { PastComponent } from './content/past/past.component';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DiagnosisComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PresentComponent,
    PastComponent
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
