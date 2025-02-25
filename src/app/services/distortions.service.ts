import { computed, inject, Injectable, signal, Signal } from '@angular/core';
import { MOCK_DISTORTIONS } from '../constants/distortions.mock';
import { Distortion } from '../models/distortion';
import { CaseService } from './case.service';

@Injectable({
  providedIn: 'root'
})
export class DistortionsService {
  private caseService = inject(CaseService);

  private distortions = signal([...MOCK_DISTORTIONS]).asReadonly();

  getDistortion(slug: string): Signal<Distortion | null> {
    return computed(() => this.distortions().find(distortion => distortion.title === slug)!);
  }

  getDistortions(): Signal<Distortion[]> {
    return this.distortions;
  }

  getSortedDistortions(): Signal<Distortion[]> {
    return computed(() => [...this.distortions()].sort((d1, d2) => {
      const d1Count = this.caseService.getRelevantCases(d1.title)().length;
      const d2Count = this.caseService.getRelevantCases(d2.title)().length;
  
      return d2Count - d1Count;
    }));
  }
}
