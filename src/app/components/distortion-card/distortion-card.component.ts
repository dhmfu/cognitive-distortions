import { ChangeDetectionStrategy, Component, computed, DestroyRef, effect, inject, input, OnDestroy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Case } from '../../models/case';
import { CaseService } from '../../services/case.service';
import { DistortionsService } from '../../services/distortions.service';
import { StebFormComponent } from '../steb-form/steb-form.component';
import { StebViewComponent } from '../steb-view/steb-view.component';

@Component({
  selector: 'distortion-card',
  imports: [MatCardModule, MatButtonModule, MatBottomSheetModule, MatIconModule, MatDialogModule, StebViewComponent, MatDividerModule],
  templateUrl: './distortion-card.component.html',
  styleUrl: './distortion-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionCardComponent implements OnDestroy {
  private destroyRef = inject(DestroyRef);
  private distortionsService = inject(DistortionsService);
  private bottomSheet = inject(MatBottomSheet);
  private caseService = inject(CaseService);
  private router = inject(Router);

  private formSheetRef?: MatBottomSheetRef<StebFormComponent>;

  slug = input.required<string>();

  protected distortion = computed(() => {
    const slug = decodeURIComponent(this.slug());

    return this.distortionsService.getDistortion(slug)();
  });
  protected title = computed(() => this.distortion()?.title);
  protected details = computed(() => this.distortion()?.details);
  protected example = computed(() => this.distortion()?.example);
  protected category = computed(() => this.distortion()?.category);

  // effects
  private distortionExistGuard = effect(() => {
    if (this.slug !== undefined && !this.distortion()) {
      this.router.navigate(['']);
    }
  });

  protected relevantCases = computed(() => {
    const distortionTitle = this.title();

    if (!distortionTitle) {
      return [];
    }

    const cases = this.caseService.getRelevantCases(distortionTitle);

    return cases();
  });

  ngOnDestroy(): void {
    if (this.formSheetRef) {
      this.formSheetRef.dismiss();
    }
  }

  protected onLog(): void {
    this.formSheetRef = this.bottomSheet.open(StebFormComponent, {
      data: this.title(),
      autoFocus: false,
    });

    this.formSheetRef.afterDismissed().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((data: Case | undefined) => {
      if (data) {
        this.caseService.log(data);
      }

      this.formSheetRef = undefined;
    });
  }
}
