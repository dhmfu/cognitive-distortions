import { ChangeDetectionStrategy, Component, computed, HostListener, inject, input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { Distortion } from '../../models/distortion';
import { CaseService } from '../../services/case.service';
import { DistortionThumbMenuComponent } from '../distortion-thumb-menu/distortion-thumb-menu.component';

// TODO: tech-debt: refactor (abstract away) card and thumb

@Component({
  selector: 'distorion-thumb',
  imports: [MatCardModule, MatButtonModule, MatBadgeModule, MatIconModule, MatBottomSheetModule],
  templateUrl: './distortion-thumb.component.html',
  styleUrl: './distortion-thumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistorionThumbComponent {
  extendedView = input(false);
  distortion = input<Distortion>();

  private caseService = inject(CaseService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private bottomSheet = inject(MatBottomSheet);

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

  protected openMenu(event: Event): void {
    event.stopPropagation();

    // TODO: tech-debt: clear ref on navigation
    this.bottomSheet.open(DistortionThumbMenuComponent, {
      data: this.title(),
      restoreFocus: false,
      panelClass: 'smooth-scroll-panel'
    });
  }
}
