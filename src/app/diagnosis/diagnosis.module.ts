import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DiagnosisComponent} from './diagnosis.component';
import {ChartModule} from 'primeng/chart';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [DiagnosisComponent],
  imports: [
    CommonModule,
    ChartModule,
    CommonModule,
    FormsModule,
    BrowserModule
  ]
})
export class DiagnosisModule { }
