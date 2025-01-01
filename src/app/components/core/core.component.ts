import { Component, DestroyRef, HostListener, inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { AppToolbarComponent } from '../app-toolbar/app-toolbar.component';
import { AppUpdateService } from '../../services/app-update.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  ngOnInit(): void {
    this.pollAppUpdates();
  }

  @HostListener('press', ['$event']) onPress(pressEvent: HammerInput) {
    pressEvent.preventDefault();
    pressEvent.srcEvent.preventDefault();
    pressEvent.srcEvent.stopImmediatePropagation();
    
    const snackOptions: MatSnackBarConfig = {
      duration: 500,
      panelClass: ['text-lg', 'no-select']
    };
    this.snackBar.open(`version: 0.0.1`, '', snackOptions);
  }

  private pollAppUpdates(): void {
    this.appUpdates.updateAvailable$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(event => {
      const snackOptions: MatSnackBarConfig = {
        duration: 5000,
        panelClass: ['text-lg']
      };

      const version = (event.latestVersion.appData as any)?.version as string;
      
      this.snackBar.open(`version: ${version}`, '', snackOptions);
    });
  }
}
