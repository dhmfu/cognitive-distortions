import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'distortion-thumb-menu',
  imports: [MatListModule, MatButtonModule],
  templateUrl: './distortion-thumb-menu.component.html',
  styleUrl: './distortion-thumb-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionThumbMenuComponent {
  openLink(e: any): void {
    console.log(e);
  }
}
