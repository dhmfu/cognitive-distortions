import { Injectable, signal, WritableSignal } from '@angular/core';
import { LocalKey } from '../constants/local-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage = this.initStorage();

  set(key: LocalKey, value: any): void {
    const stringValue = JSON.stringify(value);

    const updatedLocalMap = this.storage().set(key, stringValue);

    this.storage.set(updatedLocalMap);

    localStorage.setItem(key, stringValue);
  }

  get<T>(key: LocalKey): T | null {
    const localValue = this.storage().get(key);
    
    return localValue && JSON.parse(localValue);
  }

  remove(key: LocalKey): void {
    localStorage.removeItem(key);
  }

  private initStorage(): WritableSignal<Map<string, string | null>> {
    const localEntries = Object.values(LocalKey).reduce((entries, localKey) => {
      const localValue = localStorage.getItem(localKey);
      
      const entry: [string, string | null] = [localKey, localValue];

      return [...entries, entry];
    }, [] as [string, string | null][]);

    return signal(new Map<string, string | null>(localEntries));
  }
}
