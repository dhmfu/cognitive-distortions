import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import isEqual from 'lodash/isEqual';
import { map } from 'rxjs/operators';
import { Case } from '../../models/case';
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
  private dialogRef = inject(MatDialogRef);
  private dialogData = inject<string>(MAT_DIALOG_DATA);

  protected form = this.fb.nonNullable.group({
    details: this.fb.nonNullable.group({
      situation: [''],
      thoughts: [''],
      distortions: [[this.dialogData]],
      emotions: [''],
      behaviour: ['']
    }),
    date: [new Date(), Validators.required]
  });
  protected distortionsControl = this.form.get('details')!.get('distortions')!;

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

  // onDistortionAdd(event: MatAutocompleteSelectedEvent): void {
  //   const distortion = event.option.value as Distortion
  //   const presentDistortions = [...this.distortionsControl.value || []];

  //   this.distortionsControl.setValue([...presentDistortions, distortion.title]);
  // }

  onSubmit():  void {
    const caseData: Case = this.form.getRawValue();

    this.dialogRef.close(caseData);
  }
}
