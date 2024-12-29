import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { fadeInAnimation, fadeOutAnimation, slideInLeftAnimation, slideOutRightAnimation } from 'angular-animations';
import { IAnimationOptions } from 'angular-animations/common/interfaces';
import { timer } from 'rxjs';
import { map, skip, startWith, switchMap } from 'rxjs/operators';
import { Layout } from '../../constants/layout.enum';
import { DistortionsService } from '../../services/distortions.service';
import { LayoutService } from '../../services/layout.service';
import { DistorionThumbComponent } from '../distortion-thumb/distortion-thumb.component';

const SLIDE_DURATION: IAnimationOptions = { duration: 750 };

@Component({
  selector: 'distortions',
  imports: [DistorionThumbComponent],
  templateUrl: './distortions.component.html',
  styleUrl: './distortions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    slideInLeftAnimation(SLIDE_DURATION),
    slideOutRightAnimation(SLIDE_DURATION),
    fadeOutAnimation(SLIDE_DURATION),
    fadeInAnimation(SLIDE_DURATION)
  ]
})
export class DistortionsComponent {
  private layoutService = inject(LayoutService);
  private distortionService = inject(DistortionsService);

  gridLayout = computed(() => {
    const currentLayout = this.layoutService.getCurrent();

    return currentLayout() === Layout.Grid;
  });
  rowsLayout = computed(() => !this.gridLayout());
  animating = this.defineAnimating();

  distortions = toSignal(
    this.distortionService.getDistortions(),
    { initialValue: [] }
  );

  private defineAnimating(): Signal<boolean> {
    return toSignal(
      toObservable(this.layoutService.getCurrent()).pipe(
        skip(1),
        switchMap(() => timer(SLIDE_DURATION.duration! + 1).pipe(
          map(() => false),
          startWith(true),
        )),
      ),
      { initialValue: false }
    );
  }
}
