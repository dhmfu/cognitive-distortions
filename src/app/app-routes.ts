import { Routes } from '@angular/router';
import { DistortionCardComponent } from './components/distortion-card/distortion-card.component';
import { DistortionsComponent } from './components/distortions/distortions.component';
import { StebAnalysisComponent } from './components/steb-analysis/steb-analysis.component';

export const routes: Routes = [
  {
    path: 'distortions',
    children: [
      {
        path: '',
        component: DistortionsComponent,
        pathMatch: 'full'
      },
      {
        path: ':slug',
        component: DistortionCardComponent
      },
    ]
  },
  {
    path: 'steb-analysis',
    component: StebAnalysisComponent
  },
  {
    path: '',
    redirectTo: 'distortions',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'distortions',
    pathMatch: 'full'
  }
];