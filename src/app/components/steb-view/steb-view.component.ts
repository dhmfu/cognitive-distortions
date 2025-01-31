import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import groupBy from "lodash/groupBy";
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
    const groupedCases = groupBy(
      this.relevantCases(),
      ({ date }) => date.setHours(0, 0, 0, 0)
    );

    return Object.values(groupedCases);
  });
}