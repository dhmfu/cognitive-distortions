import { ChangeDetectionStrategy, Component, computed, HostListener, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Distortion } from '../../models/distortion';

@Component({
  selector: 'distorion-thumb',
  imports: [MatCardModule],
  templateUrl: './distortion-thumb.component.html',
  styleUrl: './distortion-thumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistorionThumbComponent {
  index = input('', { transform: trimString });
  distortion = input<Distortion>();

  category = computed(() => this.distortion()?.category);
  title = computed(() => this.distortion()?.title);

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  @HostListener('click') navigate(): void {
    this.router.navigate([this.index()], { relativeTo: this.activatedRoute });
  }
}

function trimString(value: number | undefined): string {  
  return value?.toString() || '';
}
