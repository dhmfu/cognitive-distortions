import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MOCK_DISTORTIONS } from '../../constants/distortions.mock';
import { DistorionThumbComponent } from '../distortion-thumb/distortion-thumb.component';

@Component({
  selector: 'distortions',
  imports: [DistorionThumbComponent],
  templateUrl: './distortions.component.html',
  styleUrl: './distortions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionsComponent {
  distortions = signal(MOCK_DISTORTIONS);
}
