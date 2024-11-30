import { Component, ElementRef, viewChild } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { filter, first, fromEvent, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'username';

  btnRef = viewChild<MatButton, ElementRef<HTMLButtonElement>>('btn', { read: ElementRef });
  dominanceAsserted = this.getData();

  private getData() {
    const dataSource = toObservable(this.btnRef).pipe(
      filter(ref => !!ref),
      switchMap((ref) => fromEvent(ref.nativeElement, 'click')),
      first(),
      map(() => 'TRUE' as 'TRUE' | 'FALSE')
    );

    return toSignal(dataSource, { initialValue: 'FALSE' });
  }
}
