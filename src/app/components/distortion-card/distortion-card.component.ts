import { ChangeDetectionStrategy, Component, computed, input, Signal, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Distortion } from '../../models/distortion';

@Component({
  selector: 'distortion-card',
  imports: [MatCardModule],
  templateUrl: './distortion-card.component.html',
  styleUrl: './distortion-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionCardComponent {
  distortion = input<Distortion>();
  title = computed(() => this.distortion()?.title);
  details = computed(() => this.distortion()?.details);
  example = computed(() => this.distortion()?.example);
}
