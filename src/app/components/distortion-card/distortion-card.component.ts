import { ChangeDetectionStrategy, Component, computed, inject, input, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { DistortionsService } from '../../services/distortions.service';
import { Distortion } from '../../models/distortion';

@Component({
  selector: 'distortion-card',
  imports: [MatCardModule],
  templateUrl: './distortion-card.component.html',
  styleUrl: './distortion-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionCardComponent {
  private distortionsService = inject(DistortionsService);
  private activatedRoute = inject(ActivatedRoute);

  distortion: Signal<Distortion | null> = toSignal(
    this.activatedRoute.params.pipe(
      map(params => params['slug'] as string || ''),
      switchMap(slug => this.distortionsService.getDistortion(slug))
    ),
    { initialValue: null }
  );

  title = computed(() => this.distortion()?.title);
  details = computed(() => this.distortion()?.details);
  example = computed(() => this.distortion()?.example);
  category = computed(() => this.distortion()?.category);
}
