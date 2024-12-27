import { ChangeDetectionStrategy, Component, HostBinding, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DistortionsService } from '../../services/distortions.service';
import { DistorionThumbComponent } from '../distortion-thumb/distortion-thumb.component';
import { LayoutService } from '../../services/layout.service';
import { Layout } from '../../constants/layout.enum';

@Component({
  selector: 'distortions',
  imports: [DistorionThumbComponent],
  templateUrl: './distortions.component.html',
  styleUrl: './distortions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistortionsComponent {
  private layoutService = inject(LayoutService);

  @HostBinding('class') get layout(): string {
    const currentLayout = this.layoutService.getCurrent();

    return currentLayout() === Layout.Grid ? 'grid' : 'rows';
  }

  distortions = toSignal(inject(DistortionsService).getDistortions(), { initialValue: [] });
}
