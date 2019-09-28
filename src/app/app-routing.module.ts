import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DiagnosisComponent} from './diagnosis/diagnosis.component';

const routes: Routes = [
  {path: 'diagnosis', component: DiagnosisComponent},
  {path: '', redirectTo: '/diagnosis', pathMatch: 'full'},
  {path: '**', component: DiagnosisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
