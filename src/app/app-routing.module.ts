import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DiagnosisComponent} from './diagnosis/diagnosis.component';
import {TimelineComponent} from './timeline/timeline.component';

const routes: Routes = [
  {path: 'diagnosis', component: DiagnosisComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: '', redirectTo: '/diagnosis', pathMatch: 'full'},
  {path: '**', component: DiagnosisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
