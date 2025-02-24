import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Case } from '../../models/case';
import { CaseService } from '../../services/case.service';
import { StebFormContainerComponent } from '../steb-form-container/steb-form-container.component';
import { StebViewComponent } from '../steb-view/steb-view.component';

@Component({
  selector: 'steb-analysis',
  imports: [StebViewComponent, MatButtonModule, MatIconModule, MatDividerModule, MatBottomSheetModule],
  templateUrl: './steb-analysis.component.html',
  styleUrl: './steb-analysis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StebAnalysisComponent {
  private caseService = inject(CaseService);
  private destroyRef = inject(DestroyRef);
  private bottomSheet = inject(MatBottomSheet);

  private formSheetRef?: MatBottomSheetRef<StebFormContainerComponent>;

  protected descriptionExpanded = signal(false);

  protected cases = this.caseService.getAllCases();

  protected toggleDescription(): void {
    this.descriptionExpanded.update(expanded => !expanded);
  }

  protected onLog(): void {
    this.formSheetRef = this.bottomSheet.open(StebFormContainerComponent, {
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
