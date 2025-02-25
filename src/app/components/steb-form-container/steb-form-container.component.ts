import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Case } from '../../models/case';
import { StebFormComponent } from "../steb-form/steb-form.component";

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
