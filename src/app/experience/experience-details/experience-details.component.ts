import { CommonModule } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-experience-details',
  imports: [CommonModule, MatIconModule],
  templateUrl: './experience-details.component.html',
  styleUrl: './experience-details.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public exp: any,
    public dialogRef: MatDialogRef<ExperienceDetailsComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}
