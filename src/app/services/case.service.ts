import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { LocalKey } from '../constants/local-keys.enum';
import { Case } from '../models/case';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private localStorage = inject(LocalStorageService);
  
  private cases = this.initCurrent();

  log(caseData: Case): void  {
    const currentCases = this.cases();
    const newCaseState = [...currentCases, caseData];

    this.localStorage.set(LocalKey.Cases, newCaseState);

    this.cases.set(newCaseState);
  }

  getRelevantCases(distortion: string): Signal<Case[]> {
    return computed(() => this.cases().filter(
      caseData => !!caseData.details.distortions.includes(distortion)
    ));
  }

  private initCurrent(): WritableSignal<Case[]> {
    const localCases = this.localStorage.get<Case[]>(LocalKey.Cases);
    const cases = (localCases ?? []).map(caseData => ({
      ...caseData,
      date: new Date(caseData.dateTime)
    }));
    

    return signal<Case[]>(cases);
  }
}
