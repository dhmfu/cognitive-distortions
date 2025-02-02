import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import isEqual from 'lodash/isEqual';
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
    const newCaseState = [...this.cases(), caseData];

    this.localStorage.set(LocalKey.Cases, newCaseState);

    this.cases.set(newCaseState);
  }

  logNothing(): void {
    const nothing = this.localStorage.get<number>(LocalKey.Nothing) ?? 0;

    this.localStorage.set(LocalKey.Nothing, nothing + 1);
  }

  delete(caseData: Case): void {
    const newCaseState = this.cases().filter(
      currentCase => !isEqual(currentCase, caseData)
    );

    if (!newCaseState.length) {
      this.localStorage.remove(LocalKey.Cases);
    } else {
      this.localStorage.set(LocalKey.Cases, newCaseState);
    }

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
