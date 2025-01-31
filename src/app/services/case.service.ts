import { computed, Injectable, Signal, signal } from '@angular/core';
import { Case } from '../models/case';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private cases = signal<Case[]>([]);

  log(caseData: Case): void  {
    const currentCases = this.cases();

    this.cases.set([...currentCases, caseData]);
  }

  relevantCases(distortion: string): Signal<Case[]> {
    return computed(() => this.cases().filter(
      caseData => !!caseData.details.distortions.includes(distortion)
    ));
  }
}
