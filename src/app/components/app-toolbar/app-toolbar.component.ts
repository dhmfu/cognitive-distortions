import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { filter } from 'rxjs/operators';
import { Layout } from '../../constants/layout.enum';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonToggleModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app-toolbar.component.html',
  styleUrl: './app-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppToolbarComponent implements OnInit {
  layoutControl = new FormControl<Layout | null>(null);

  readonly LAYOUT_OPTIONS = Layout;

  private destroyRef = inject(DestroyRef);
  private layoutService = inject(LayoutService);

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
}
