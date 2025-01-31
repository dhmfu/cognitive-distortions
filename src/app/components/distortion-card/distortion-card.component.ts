import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnDestroy, Signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Case } from '../../models/case';
import { Distortion } from '../../models/distortion';
import { CaseService } from '../../services/case.service';
import { DistortionsService } from '../../services/distortions.service';
import { StebFormComponent } from '../steb-form/steb-form.component';
import { StebViewComponent } from '../steb-view/steb-view.component';

@Component({
  selector: 'distortion-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDialogModule, StebViewComponent, MatDividerModule],
  templateUrl: './distortion-card.component.html',
  styleUrl: './distortion-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionCardComponent implements OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private distortionsService = inject(DistortionsService);
  private dialogService = inject(MatDialog);
  private caseService = inject(CaseService);

  private formDialogRef?: MatDialogRef<StebFormComponent>;

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

  relevantCases = computed(() => {
    const distortionTitle = this.title();

    if (!distortionTitle) {
      return [];
    }

    const cases = this.caseService.getRelevantCases(distortionTitle);

    return cases();
  });

  ngOnDestroy(): void {
    if (this.formDialogRef && this.formDialogRef.getState() !== MatDialogState.CLOSED) {
      this.formDialogRef.close();
    }
  }

  onLog(): void {
    this.formDialogRef = this.dialogService.open(StebFormComponent, {
      data: this.title(),
      autoFocus: false,
    });

    this.formDialogRef.afterClosed().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((data: Case | undefined) => {
      if (data) {
        this.caseService.log(data);
      }
    });
  }
}
