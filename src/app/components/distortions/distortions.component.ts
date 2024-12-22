import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DistortionsService } from '../../services/distortions.service';
import { DistorionThumbComponent } from '../distortion-thumb/distortion-thumb.component';

@Component({
  selector: 'distortions',
  imports: [DistorionThumbComponent],
  templateUrl: './distortions.component.html',
  styleUrl: './distortions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionsComponent {
  distortions = toSignal(inject(DistortionsService).getDistortions(), { initialValue: [] });
}
