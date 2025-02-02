import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Layout } from '../../constants/layout.enum';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonToggleModule, MatIconModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './app-toolbar.component.html',
  styleUrl: './app-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppToolbarComponent implements OnInit {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private layoutService = inject(LayoutService);

  private detailsRouted$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map((event) => event.url !== '/')
  );

  protected layoutControl = new FormControl<Layout | null>(null);

  protected backButtonVisible = toSignal(
    this.detailsRouted$.pipe(map(routed => Number(routed))),
    { initialValue: 0 }
  );
  protected layoutControlVisible = computed(() => Number(!this.backButtonVisible()));

  protected readonly LAYOUT_OPTIONS = Layout;

  ngOnInit(): void {
    const currentLayout = this.layoutService.getCurrent();

    this.layoutControl.setValue(currentLayout());
    
    this.layoutControl.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef),
      filter(value => value !== null)
    ).subscribe(layout => {
      this.layoutService.setCurrent(layout);
    });
  }

  protected goBack(): void {
    this.router.navigate(['']);
  }
}
