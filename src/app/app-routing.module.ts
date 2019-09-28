import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DiagnosisComponent} from './diagnosis/diagnosis.component';
import {TimelineComponent} from './timeline/timeline.component';
import {LandingComponent} from './layout/landing/landing.component';
import {PosterTrioComponent} from './poster-trio/poster-trio.component';

const routes: Routes = [
  {path: 'diagnosis', component: DiagnosisComponent},
  {path: 'poster', component: PosterTrioComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
