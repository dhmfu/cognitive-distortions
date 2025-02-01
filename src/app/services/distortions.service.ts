import { computed, inject, Injectable, Signal } from '@angular/core';
import { MOCK_DISTORTIONS } from '../constants/distortions.mock';
import { Distortion } from '../models/distortion';
import { CaseService } from './case.service';

@Injectable({
  providedIn: 'root'
})
export class DistortionsService {
  private caseService = inject(CaseService);

  private distortions = computed(() => [...MOCK_DISTORTIONS].sort((d1, d2) => {
    const d1Count = this.caseService.getRelevantCases(d1.title)().length;
      const d2Count = this.caseService.getRelevantCases(d2.title)().length;

      return d2Count - d1Count;
  }));

  public getDistortion(slug: string): Signal<Distortion | null> {
    return computed(() => this.distortions().find(distortion => distortion.title === slug)!);
  }

  public getDistortions(): Signal<Distortion[]> {
    return this.distortions;
  }
}
