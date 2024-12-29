import { AsyncPipe } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { collapseOnLeaveAnimation } from 'angular-animations';
import { IAnimationOptions } from 'angular-animations/common/interfaces';
import 'hammerjs';
import { filter, map } from 'rxjs/operators';
import { AppToolbarComponent } from "./components/app-toolbar/app-toolbar.component";

const COLLAPSE_DURATION: IAnimationOptions = { duration: 250 };

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppToolbarComponent, AsyncPipe, MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    collapseOnLeaveAnimation(COLLAPSE_DURATION)
  ]
})
export class AppComponent {
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);


  detailsRouted$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map((event) => event.url !== '/')
  );

  @HostListener('press', ['$event']) onPress(pressEvent: HammerInput) {
    pressEvent.preventDefault();
    pressEvent.srcEvent.preventDefault();
    pressEvent.srcEvent.stopImmediatePropagation();
    const snackOptions: MatSnackBarConfig = {
      duration: 500,
      panelClass: ['text-lg', 'no-select']
    }
    this.snackBar.open(`version: 0.0.1`, '', snackOptions);

  }
}
