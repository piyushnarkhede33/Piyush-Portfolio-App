import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExperienceDetailsComponent } from '../../experience/experience-details/experience-details.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, MatIconModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
constructor(
    @Inject(MAT_DIALOG_DATA) public exp: any,
    public dialogRef: MatDialogRef<ExperienceDetailsComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}
