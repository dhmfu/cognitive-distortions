import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Case } from '../../models/case';
import { CaseService } from '../../services/case.service';
import { StebFormComponent } from '../steb-form/steb-form.component';

@Component({
  imports: [MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './distortion-thumb-menu.component.html',
  styleUrl: './distortion-thumb-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionThumbMenuComponent {
  private destroyRef = inject(DestroyRef);
  private sheetRef = inject(MatBottomSheetRef);
  private dialogService = inject(MatDialog);
  private caseService = inject(CaseService);
  private distortionTitle = inject<string>(MAT_BOTTOM_SHEET_DATA);

  private formDialogRef?: MatDialogRef<StebFormComponent>;

  protected onLog(): void {
    this.formDialogRef = this.dialogService.open(StebFormComponent, {
      data: this.distortionTitle,
      autoFocus: false,
    });

    this.formDialogRef.afterClosed().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((data: Case | undefined) => {
      if (data) {
        this.caseService.log(data);

        this.sheetRef.dismiss();
      }
    });
  }

  protected onNothing(): void {
    this.caseService.logNothing();
  }
}
