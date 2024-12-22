import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MOCK_DISTORTIONS } from '../constants/distortions.mock';
import { Distortion } from '../models/distortion';

@Injectable({
  providedIn: 'root'
})
export class DistortionsService {
  public getDistortion(slug: string): Observable<Distortion | null> {
    return this.getDistortions().pipe(map(distortions => distortions[parseInt(slug)] || null));
  }

  public getDistortions(): Observable<Distortion[]> {
    return of(MOCK_DISTORTIONS);
  }
}
