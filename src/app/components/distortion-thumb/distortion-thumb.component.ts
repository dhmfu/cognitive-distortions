import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Distortion } from '../../models/distortion';

@Component({
  selector: 'distorion-thumb',
  imports: [MatCardModule],
  templateUrl: './distortion-thumb.component.html',
  styleUrl: './distortion-thumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistorionThumbComponent {
  distortion = input<Distortion>();

  category = computed(() => this.distortion()?.category);
  title = computed(() => this.distortion()?.title);
}
