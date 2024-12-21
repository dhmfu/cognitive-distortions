import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DistortionCardComponent } from "../distortion-card/distortion-card.component";
import { MOCK_DISTORTIONS } from '../../constants/distortions.mock';

@Component({
  selector: 'distortions',
  imports: [DistortionCardComponent],
  templateUrl: './distortions.component.html',
  styleUrl: './distortions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionsComponent {
  distortions = signal(MOCK_DISTORTIONS);
}
