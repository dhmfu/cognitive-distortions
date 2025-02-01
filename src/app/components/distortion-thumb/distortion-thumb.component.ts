import { ChangeDetectionStrategy, Component, computed, HostListener, inject, input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Distortion } from '../../models/distortion';
import { CaseService } from '../../services/case.service';

@Component({
  selector: 'distorion-thumb',
  imports: [MatCardModule, MatBadgeModule],
  templateUrl: './distortion-thumb.component.html',
  styleUrl: './distortion-thumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistorionThumbComponent {
  extendedView = input(false);
  index = input('', { transform: trimString });
  distortion = input<Distortion>();

  private caseService = inject(CaseService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  protected category = computed(() => this.distortion()?.category);
  protected title = computed(() => this.distortion()?.title);
  protected details = computed(() => this.distortion()?.details);
  protected example = computed(() => this.distortion()?.example);

  protected caseCount = computed(() => {
    const distortionTitle = this.title();

    if (!distortionTitle) {
      return 0;
    }

    const cases = this.caseService.getRelevantCases(distortionTitle);

    return cases().length;
  });

  @HostListener('click') navigate(): void {
    this.router.navigate([encodeURIComponent(this.title()!)], { relativeTo: this.activatedRoute });
  }
}

function trimString(value: number | undefined): string {  
  return value?.toString() || '';
}
