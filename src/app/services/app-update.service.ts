import { inject, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppUpdateService {
  private swUpdate = inject(SwUpdate);
  
  updateAvailable$ = this.swUpdate.versionUpdates.pipe(
    filter(event => event.type === 'VERSION_READY')
  );
}
