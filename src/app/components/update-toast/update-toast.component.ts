import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'update-toast',
  imports: [MatButtonModule, MatSnackBarModule, MatIcon],
  templateUrl: './update-toast.component.html',
  styleUrl: './update-toast.component.scss'
})
export class UpdateToastComponent {
  snackBarRef = inject(MatSnackBarRef);

  version: string = inject(MAT_SNACK_BAR_DATA);
}
