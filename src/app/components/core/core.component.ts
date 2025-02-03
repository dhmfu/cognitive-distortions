import { Component, DestroyRef, HostListener, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { AppUpdateService } from '../../services/app-update.service';
import { APP_VERSION } from '../../tokens/version.token';
import { AppToolbarComponent } from '../app-toolbar/app-toolbar.component';
import { UpdateToastComponent } from '../update-toast/update-toast.component';

@Component({
  selector: 'core',
  imports: [RouterOutlet, AppToolbarComponent, MatSnackBarModule],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent implements OnInit {
  private snackBar = inject(MatSnackBar);
  private appUpdates = inject(AppUpdateService);
  private destroyRef = inject(DestroyRef);
  private appVersion = inject(APP_VERSION);

  ngOnInit(): void {
    this.pollAppUpdates();
  }

  @HostListener('press', ['$event']) onPress(pressEvent: HammerInput): void {
    pressEvent.preventDefault();
    pressEvent.srcEvent.preventDefault();
    pressEvent.srcEvent.stopImmediatePropagation();

    const snackOptions: MatSnackBarConfig = {
      duration: 1500,
      panelClass: ['text-lg', 'no-select']
    };

    this.snackBar.open(`version: ${this.appVersion}`, '', snackOptions);
  }

  private pollAppUpdates(): void {
    this.appUpdates.updateAvailable$.pipe(
      takeUntilDestroyed(this.destroyRef),
      switchMap(event => {
        const version = (event.latestVersion.appData as any)?.version as string;
        const snackOptions: MatSnackBarConfig = {
          panelClass: ['text-lg'],
          data: version
        };
  
        const toastRef = this.snackBar.openFromComponent(UpdateToastComponent, snackOptions);
        
        return toastRef.afterDismissed();
      }),
      filter(dismiss => dismiss.dismissedByAction)
    ).subscribe(() => {
      document.location.reload();
    });
  }
}
