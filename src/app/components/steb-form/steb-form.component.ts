import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import isEqual from 'lodash/isEqual';
import { map } from 'rxjs/operators';
import { MOCK_DISTORTIONS } from '../../constants/distortions.mock';
import { Distortion } from '../../models/distortion';
import { DistortionsService } from '../../services/distortions.service';



@Component({
  selector: 'steb-form',
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatChipsModule, MatAutocompleteModule, ReactiveFormsModule],
  templateUrl: './steb-form.component.html',
  styleUrl: './steb-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StebFormComponent {
  private fb = inject(FormBuilder);
  private distortionsService = inject(DistortionsService);

  protected distortionsControl = this.fb.control([MOCK_DISTORTIONS[0].title]);

  protected form = this.fb.group({
    details: this.fb.group({
      situation: this.fb.control(''),
      thoughts: this.fb.control(''),
      distortions: this.distortionsControl,
      emotions: this.fb.control(''),
      behaviour: this.fb.control('')
    }),
    date: this.fb.control<Date>(new Date(), Validators.required)
  });

  protected distortions = toSignal(
    this.distortionsControl.valueChanges,
    { initialValue: this.distortionsControl.value, equal: isEqual }
  );

  private categoryMap$ = this.distortionsService.getDistortions().pipe(
    map(distortions => distortions.reduce((map, distortion) => {
      const categoryKey = distortion.category;

      if (!map[categoryKey]) {
        map[categoryKey] = [];
      }

      map[categoryKey].push(distortion);

      return map;
    }, {} as { [title: string]: Distortion[] })),
    takeUntilDestroyed()
  );

  private categorySource = toSignal(this.categoryMap$);

  protected categories = computed(() => {
    const categoryMap = this.categorySource();

    if (!categoryMap) {
      return [];
    }

    const allDistortions = Object.values(categoryMap).flat();

    const distortions = this.distortions()!;

    distortions.forEach(distortionTitle => {
      const distortion = allDistortions.find(({ title }) => title === distortionTitle);

      if (!distortion || !categoryMap[distortion.category]) {
        return;
      }
      
      const remainingCategoryDistortions = categoryMap[distortion.category].filter(dsa => dsa.title !== distortion.title);
      
      if (remainingCategoryDistortions.length) {
        categoryMap[distortion.category] = remainingCategoryDistortions;
      } else {
        delete categoryMap[distortion.category]
      }
    });

    return Object.entries(categoryMap).map(([key, value]) => {
      return { title: key, distortions: value };
    });
  });

  onSubmit():  void {
    alert(JSON.stringify(this.form.value));
  }
}
