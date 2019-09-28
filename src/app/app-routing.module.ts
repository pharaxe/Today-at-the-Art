import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetricsComponent } from './metrics/metrics.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LandingComponent } from './layout/landing/landing.component';
import { PosterTrioComponent } from './poster-trio/poster-trio.component';

const routes: Routes = [
  {path: 'poster', component: PosterTrioComponent},
  {path: 'metrics', component: MetricsComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
