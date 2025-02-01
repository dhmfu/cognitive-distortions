import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import groupBy from "lodash/groupBy";
import orderBy from "lodash/orderBy";
import { Case } from '../../models/case';
import { CaseService } from '../../services/case.service';

@Component({
  selector: 'steb-view',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatExpansionModule, MatTooltipModule],
  templateUrl: './steb-view.component.html',
  styleUrl: './steb-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StebViewComponent {
  relevantCases = input<Case[]>([]);

  private caseService = inject(CaseService);

  protected casesByDate = computed(() => {
    const sortedCases = orderBy(this.relevantCases(), 'date', 'desc')

    const groupedCases = groupBy(
      sortedCases,
      ({ dateTime }) => new Date(dateTime).setHours(0, 0, 0, 0)
    );

    return Object.values(groupedCases);
  });

  protected onCaseDelete(event: Event, caseData: Case): void {
    event.stopPropagation();

    this.caseService.delete(caseData);
  }
}