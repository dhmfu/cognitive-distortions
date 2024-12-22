import { Routes } from '@angular/router';
import { DistortionsComponent } from './components/distortions/distortions.component';
import { DistortionCardComponent } from './components/distortion-card/distortion-card.component';

export const routes: Routes = [
  {
    path: '',
    component: DistortionsComponent,
    pathMatch: 'full'
  },
  {
    path: ':slug',
    component: DistortionCardComponent
  }
];