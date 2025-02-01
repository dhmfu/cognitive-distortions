import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, input, OnDestroy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Case } from '../../models/case';
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
  private destroyRef = inject(DestroyRef);
  private distortionsService = inject(DistortionsService);
  private dialogService = inject(MatDialog);
  private caseService = inject(CaseService);

  private formDialogRef?: MatDialogRef<StebFormComponent>;

  slug = input.required<string>();

  protected distortion = computed(() => {
    const slug = decodeURIComponent(this.slug());

    return this.distortionsService.getDistortion(slug)();
  });
  protected title = computed(() => this.distortion()?.title);
  protected details = computed(() => this.distortion()?.details);
  protected example = computed(() => this.distortion()?.example);
  protected category = computed(() => this.distortion()?.category);

  protected relevantCases = computed(() => {
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
