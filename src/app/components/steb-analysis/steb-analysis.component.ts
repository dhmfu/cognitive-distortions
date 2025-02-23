import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { StebViewComponent } from '../steb-view/steb-view.component';
import { CaseService } from '../../services/case.service';

@Component({
  selector: 'steb-analysis',
  imports: [StebViewComponent],
  templateUrl: './steb-analysis.component.html',
  styleUrl: './steb-analysis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StebAnalysisComponent {
  private caseService = inject(CaseService);

  protected cases = this.caseService.getAllCases();
}
