import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Layout } from '../constants/layout.enum';
import { LocalStorageService } from './local-storage.service';
import { LocalKey } from '../constants/local-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private localStorage = inject(LocalStorageService);

  private current = this.initCurrent();

  getCurrent(): Signal<Layout> {
    return this.current.asReadonly();
  }

  setCurrent(layout: Layout): void {
    this.localStorage.set(LocalKey.Layout, layout);

    this.current.set(layout);
  }

  private initCurrent(): WritableSignal<Layout> {
    const localLayout = this.localStorage.get<Layout>(LocalKey.Layout);

    return signal(localLayout ?? Layout.Rows);
  }
}
