import { ApplicationConfig, importProvidersFrom, Injectable, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { version } from '../../package.json';
import { routes } from './app-routes';
import { APP_VERSION } from './tokens/version.token';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override events = ['press']; 
  override overrides = <any> {
    press: { time: 500 },
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideAnimationsAsync(),
    provideRouter(routes, withComponentInputBinding()),
    provideNativeDateAdapter(),
    importProvidersFrom(HammerModule),
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
    {
      provide: APP_VERSION,
      useValue: version
    },
  ]
};
