import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExperienceDetailsComponent } from './experience-details/experience-details.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      name: 'Piyush Narkhede',
      role: 'Full Stack Java Developer',
      company: {
        companyName: 'Finastra Ltd',
        designation: 'Software Engineer',
        client: 'Bank of Ireland',
        duration: 'Aug 2024 - Present',
        location: 'Pune, Maharashtra',
        status: 'Present',
      },
      skills: [
        'Java',
        'SpringBoot',
        'Spring Microservices',
        'OracleSql',
        'ElasticSearch',
        'IBM MQ',
      ],
      contributions: {
        dataProcessingBoost: 'Improved efficiency by 50% using multithreading',
        queryOptimization:
          'Reduced DB query time by 25% using indexing and Redis',
        leadership: 'Led a 3-member team to improve productivity by 15%',
        apiDevelopment:
          'Designed and secured RESTful APIs with session management',
      },
    },
    {
      name: 'Piyush Narkhede',
      role: 'Full Stack Java Developer',
      company: {
        companyName: 'Infosys Ltd',
        designation: 'Senior System Engineer',
        client: 'ICICI Bank',
        duration: 'Nov 2021 - Aug 2024',
        location: 'Pune, Maharashtra',
        status: 'Completed',
      },
      skills: [
        'Java',
        'SpringBoot',
        'Spring Microservices',
        'Redis',
        'Html',
        'Typescript',
        'Angular',
        'MySql',
      ],
      contributions: {
        dataProcessingBoost: 'Improved efficiency by 50% using multithreading',
        queryOptimization:
          'Reduced DB query time by 25% using indexing and Redis',
        leadership: 'Led a 3-member team to improve productivity by 15%',
        apiDevelopment:
          'Designed and secured RESTful APIs with session management',
      },
    },
  ];

  constructor(private dialog: MatDialog) {}

  openDetails(exp: any) {
    this.dialog.open(ExperienceDetailsComponent, {
      data: exp,
      width: '80%',
      height: '90%',
      maxWidth: '796px',
    });
  }
}
