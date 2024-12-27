import { computed, Injectable, Signal, signal } from '@angular/core';
import { Layout } from '../constants/layout.enum';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private current = signal(Layout.Rows);

  getCurrent(): Signal<Layout> {
    return computed(() => this.current());
  }

  setCurrent(layout: Layout): void {
    this.current.set(layout);
  }
}
