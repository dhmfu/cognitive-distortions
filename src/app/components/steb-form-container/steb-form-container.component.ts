import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StebFormComponent } from "../steb-form/steb-form.component";
import { Case } from '../../models/case';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'steb-form-container',
  imports: [StebFormComponent],
  templateUrl: './steb-form-container.component.html',
  styleUrl: './steb-form-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StebFormContainerComponent {
  private sheetRef = inject(MatBottomSheetRef);
  
  protected onSave(caseData: Case): void {
    this.sheetRef!.dismiss(caseData);
  }
}
