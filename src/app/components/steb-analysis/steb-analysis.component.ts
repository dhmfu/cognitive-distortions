import { ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CaseService } from '../../services/case.service';
import { StebViewComponent } from '../steb-view/steb-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'steb-analysis',
  imports: [StebViewComponent, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './steb-analysis.component.html',
  styleUrl: './steb-analysis.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StebAnalysisComponent {
  private caseService = inject(CaseService);

  protected descriptionExpanded = signal(false);

  protected cases = this.caseService.getAllCases();

  protected toggleDescription(): void {
    this.descriptionExpanded.update(expanded => !expanded);
  }
}
