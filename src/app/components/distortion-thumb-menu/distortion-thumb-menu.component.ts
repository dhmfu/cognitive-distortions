import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { collapseOnLeaveAnimation, expandOnEnterAnimation } from 'angular-animations';
import { map, take } from 'rxjs/operators';
import { Case } from '../../models/case';
import { CaseService } from '../../services/case.service';
import { StebFormComponent } from '../steb-form/steb-form.component';

@Component({
  imports: [MatListModule, MatButtonModule, MatIconModule, StebFormComponent],
  animations: [
    expandOnEnterAnimation({ duration: 500 }),
    collapseOnLeaveAnimation({ duration: 250 })
  ],
  templateUrl: './distortion-thumb-menu.component.html',
  styleUrl: './distortion-thumb-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionThumbMenuComponent {
  private sheetRef = inject(MatBottomSheetRef);
  private caseService = inject(CaseService);

  protected formVisible = signal(false);
  protected firstTime = toSignal(toObservable(this.formVisible).pipe(
    take(2),
    map(value => !value)
  ));

  protected onCreateCase(caseData: Case): void {
    this.caseService.log(caseData);

    this.sheetRef.dismiss();
  }

  protected onCancel(): void {
    this.formVisible.set(false);
  }
  
  protected onLog(): void {
    this.formVisible.set(true);
  }

  protected onNothing(): void {
    this.caseService.logNothing();
  }
}
