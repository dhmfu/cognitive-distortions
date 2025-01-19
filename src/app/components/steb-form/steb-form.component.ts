import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'steb-form',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './steb-form.component.html',
  styleUrl: './steb-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StebFormComponent {

}
