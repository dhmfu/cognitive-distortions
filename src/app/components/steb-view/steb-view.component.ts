import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import groupBy from "lodash/groupBy";
import orderBy from "lodash/orderBy";
import { Case } from '../../models/case';

@Component({
  selector: 'steb-view',
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './steb-view.component.html',
  styleUrl: './steb-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StebViewComponent {
  relevantCases = input<Case[]>([]);

  protected casesByDate = computed(() => {
    const sortedCases = orderBy(this.relevantCases(), 'date', 'desc')

    const groupedCases = groupBy(
      sortedCases,
      ({ date }) => new Date(date).setHours(0, 0, 0, 0)
    );

    return Object.values(groupedCases);
  });
}