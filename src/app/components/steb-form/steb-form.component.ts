import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import isEqual from 'lodash/isEqual';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
// import { DistortionsService } from '../../services/distortions.service';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Case } from '../../models/case';
import { STEB_TOOLTIPS } from './steb-tooltips';

// TODO: tech-debt: MatModules optimizations

@Component({
  selector: 'steb-form',
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatChipsModule, MatAutocompleteModule, NgxMatTimepickerModule, FormsModule, ReactiveFormsModule, MatTooltipModule],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' }
    }
  ],
  templateUrl: './steb-form.component.html',
  styleUrl: './steb-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StebFormComponent {
  private fb = inject(FormBuilder);
  // private distortionsService = inject(DistortionsService);
  private sheetData = inject<string>(MAT_BOTTOM_SHEET_DATA);

  private now = new Date();

  backVisible = input<boolean>(false);
  
  save = output<Case>();
  cancel = output<void>();

  protected form = this.fb.nonNullable.group({
    details: this.fb.nonNullable.group({
      situation: [''],
      thoughts: [''],
      distortions: [[this.sheetData]],
      emotions: [''],
      behaviour: ['']
    }),
    date: [this.now, Validators.required],
    time: [`${this.now.getHours()}:${this.now.getMinutes()}`]
  });
  protected distortionsControl = this.form.get('details')!.get('distortions')!;
  protected distortions = toSignal(
    this.distortionsControl.valueChanges,
    { initialValue: this.distortionsControl.value, equal: isEqual }
  );

  // private categoryMap$ = this.distortionsService.getDistortions().pipe(
  //   map(distortions => distortions.reduce((map, distortion) => {
  //     const categoryKey = distortion.category;

  //     if (!map[categoryKey]) {
  //       map[categoryKey] = [];
  //     }

  //     map[categoryKey].push(distortion);

  //     return map;
  //   }, {} as { [title: string]: Distortion[] })),
  //   takeUntilDestroyed()
  // );

  // private categorySource = toSignal(this.categoryMap$);

  // protected categories = computed(() => {
  //   const categoryMap = this.categorySource();

  //   if (!categoryMap) {
  //     return [];
  //   }

  //   const allDistortions = Object.values(categoryMap).flat();

  //   const distortions = this.distortions()!;

  //   distortions.forEach(distortionTitle => {
  //     const distortion = allDistortions.find(({ title }) => title === distortionTitle);

  //     if (!distortion || !categoryMap[distortion.category]) {
  //       return;
  //     }
      
  //     const remainingCategoryDistortions = categoryMap[distortion.category].filter(dsa => dsa.title !== distortion.title);
      
  //     if (remainingCategoryDistortions.length) {
  //       categoryMap[distortion.category] = remainingCategoryDistortions;
  //     } else {
  //       delete categoryMap[distortion.category]
  //     }
  //   });

  //   return Object.entries(categoryMap).map(([key, value]) => {
  //     return { title: key, distortions: value };
  //   });
  // });

  // onDistortionAdd(event: MatAutocompleteSelectedEvent): void {
  //   const distortion = event.option.value as Distortion
  //   const presentDistortions = [...this.distortionsControl.value || []];

  //   this.distortionsControl.setValue([...presentDistortions, distortion.title]);
  // }

  protected readonly TOOLTIPS = STEB_TOOLTIPS;

  protected onSubmit():  void {
    const { date, time, details } = this.form.getRawValue();
    const [hours, minutes] = time.split(':');

    const dateTime = new Date(date.setHours(+hours, +minutes));

    this.save.emit({ dateTime, details });
  }
}
