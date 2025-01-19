import { ChangeDetectionStrategy, Component, computed, inject, input, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { DistortionsService } from '../../services/distortions.service';
import { Distortion } from '../../models/distortion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { StebFormComponent } from '../steb-form/steb-form.component';

@Component({
  selector: 'distortion-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './distortion-card.component.html',
  styleUrl: './distortion-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionCardComponent {
  private distortionsService = inject(DistortionsService);
  private dialogService = inject(MatDialog);
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

  onLog(): void {
    this.dialogService.open(StebFormComponent);
  }
}
