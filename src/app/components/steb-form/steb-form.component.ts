import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import isEqual from 'lodash/isEqual';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { Case } from '../../models/case';
import { Distortion } from '../../models/distortion';
import { DistortionsService } from '../../services/distortions.service';
import { STEB_TOOLTIPS } from './steb-tooltips';

// TODO: tech-debt: MatModules optimizations

@Component({
  selector: 'steb-form',
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatChipsModule, MatAutocompleteModule, NgxMatTimepickerModule, FormsModule, ReactiveFormsModule, MatTooltipModule, MatSelectModule],
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
  private distortionsService = inject(DistortionsService);
  private sheetData = inject<string | undefined>(MAT_BOTTOM_SHEET_DATA);

  private now = new Date();

  backVisible = input<boolean>(false);
  
  save = output<Case>();
  cancel = output<void>();

  protected form = this.fb.nonNullable.group({
    details: this.fb.nonNullable.group({
      situation: [''],
      thoughts: [''],
      distortions: [this.sheetData ? [this.sheetData] : []],
      emotions: [''],
      behaviour: ['']
    }),
    date: [this.now, Validators.required],
    time: [`${this.now.getHours()}:${this.now.getMinutes()}`]
  });
  protected distortionsControl = this.form.get('details')!.get('distortions')! as FormControl<string[]>;
  
  protected distortions = toSignal(
    this.distortionsControl.valueChanges,
    { initialValue: this.distortionsControl.value, equal: isEqual }
  );
  protected addDistortionMode = signal(false);
  protected readonly TOOLTIPS = STEB_TOOLTIPS;

  private categoryMap = computed(() => {
    return this.distortionsService.getDistortions()().reduce((map, distortion) => {
      const categoryKey = distortion.category;

      if (!map[categoryKey]) {
        map[categoryKey] = [];
      }

      map[categoryKey].push(distortion);

      return map;
    }, {} as { [title: string]: Distortion[] })
  });

  protected categories = computed(() => {
    const categoryMap = this.categoryMap();

    if (!categoryMap) {
      return [];
    }

    return Object.entries(categoryMap).map(([key, value]) => {
      return { title: key, distortions: value };
    });
  });

  protected onAddDistortionsMode(): void {
    this.addDistortionMode.set(true);
  }

  protected onSubmit():  void {
    const { date, time, details } = this.form.getRawValue();
    const [hours, minutes] = time.split(':');

    const dateTime = new Date(date.setHours(+hours, +minutes));

    this.save.emit({ dateTime, details });
  }
}
