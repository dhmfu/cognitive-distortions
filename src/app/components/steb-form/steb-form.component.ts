import { ChangeDetectionStrategy, Component, computed, effect, inject, input, output, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatChipSelectionChange, MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { Case } from '../../models/case';
import { DistortionsService } from '../../services/distortions.service';
import { STEB_TOOLTIPS } from './steb-tooltips';

// TODO: tech-debt: MatModules optimizations

@Component({
  selector: 'steb-form',
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatChipsModule, MatAutocompleteModule, NgxMatTimepickerModule, FormsModule, ReactiveFormsModule, MatTooltipModule, MatSelectModule, MatExpansionModule],
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

  protected distortionsPanel = viewChild(MatExpansionPanel);

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
  
  private distortionsControlSignal = toSignal(
    this.distortionsControl.valueChanges,
    { initialValue: this.distortionsControl.value }
  );
  protected addDistortionMode = signal(false);

  protected distortions = computed(() => {
    const allDistortions = this.distortionsService.getDistortions();
    const selectedDistortions = this.distortionsControlSignal();
    const addMode = this.addDistortionMode();

    return allDistortions().reduce((result, distortion) => {
      const value = distortion.title;
      const selected = selectedDistortions.includes(value);
      const disabled = !selected && !addMode;

      return !disabled ? [...result, { value, selected }] : [...result];
    }, [] as { value: string, selected: boolean }[]);
  });
  protected distortionCounter = computed(() => this.distortions().filter(d => d.selected).length);

  protected readonly TOOLTIPS = STEB_TOOLTIPS;

  private openDistortions = effect(() => {
    if (!this.addDistortionMode()) {
      return;
    }

    const distortionsPanel = this.distortionsPanel();

    if (!distortionsPanel) {
      return;
    }

    distortionsPanel.open();
  });

  protected onAddDistortionsMode(): void {
    this.addDistortionMode.set(true);
  }

  protected onAddDistortion(event: MatChipSelectionChange): void {
    if (!event.isUserInput) {
      return;
    }
    
    const currentSelected = this.distortionsControl.value;
    const clickedDistortion: string = event.source.value;

    let newSelected: string[];

    if (event.selected) {
      newSelected = [...currentSelected, clickedDistortion];
    } else {
      newSelected = currentSelected.filter(d => d !== clickedDistortion);
    }
    
    this.distortionsControl.setValue(newSelected);
  }

  protected onSubmit():  void {
    const { date, time, details } = this.form.getRawValue();
    const [hours, minutes] = time.split(':');

    const dateTime = new Date(date.setHours(+hours, +minutes));

    this.save.emit({ dateTime, details });
  }
}
