import { Component, HostListener, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import 'hammerjs';
import { AppToolbarComponent } from "./components/app-toolbar/app-toolbar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppToolbarComponent, MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private snackBar = inject(MatSnackBar);

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
