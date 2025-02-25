import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import groupBy from "lodash/groupBy";
import orderBy from "lodash/orderBy";
import { Case } from '../../models/case';
import { CaseService } from '../../services/case.service';

@Component({
  selector: 'steb-view',
  imports: [CommonModule, MatButtonModule, MatIconModule, MatExpansionModule, MatTooltipModule, MatBadgeModule, FormsModule, MatChipsModule],
  templateUrl: './steb-view.component.html',
  styleUrl: './steb-view.component.scss',
  animations: [
    fadeInOnEnterAnimation({ duration: 500 }),
    fadeOutOnLeaveAnimation({ duration: 250 })
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StebViewComponent {
  relevantCases = input<Case[]>([]);

  private caseService = inject(CaseService);

  protected casesByDate = computed(() => {
    const sortedCases = orderBy(
      this.relevantCases(),
      caseData => caseData.dateTime.valueOf(),
      'desc'
    );

    const groupedCases = groupBy(
      sortedCases,
      ({ dateTime }) => new Date(dateTime).setHours(0, 0, 0, 0)
    );

    return Object.values(groupedCases);
  });

  protected distortionsVisible = false;

  protected onCaseDelete(event: Event, caseData: Case): void {
    event.stopPropagation();

    this.caseService.delete(caseData);
  }
}