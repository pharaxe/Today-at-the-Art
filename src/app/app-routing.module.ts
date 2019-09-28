import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DiagnosisComponent} from './diagnosis/diagnosis.component';
import {LandingComponent} from './layout/landing/landing.component';

const routes: Routes = [
  {path: 'diagnosis', component: DiagnosisComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
