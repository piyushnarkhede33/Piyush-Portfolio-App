import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { features } from 'process';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Employee Management System',
      role: 'Backend Developer',
      duration : 'Mar 2024 - Mar 2024',
      tools: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySql'],
      description:
        'A backend system with user authentication, role-based access control, and employee management features. Built using Spring technologies and Hibernate.',
      features: [
        'User Login',
        'Role-Based Access Control',
        'User Logout',
        'Secure Authentication and Authorization',
      ],
    },
    {
      name: 'Employee Management System',
      role: 'Backend Developer',
      duration : 'Mar 2024 - Mar 2024',
      tools: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySql'],
      description:
        'A backend system with user authentication, role-based access control, and employee management features. Built using Spring technologies and Hibernate.',
      features: [
        'User Login',
        'Role-Based Access Control',
        'User Logout',
        'Secure Authentication and Authorization',
      ],
    },
    {
      name: 'Employee Management System',
      role: 'Backend Developer',
      duration : 'Mar 2024 - Mar 2024',
      tools: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySql'],
      description:
        'A backend system with user authentication, role-based access control, and employee management features. Built using Spring technologies and Hibernate.',
      features: [
        'User Login',
        'Role-Based Access Control',
        'User Logout',
        'Secure Authentication and Authorization',
      ],
    },
  ];

  constructor(private dialog: MatDialog) {}

  openDetails(exp: any) {
    this.dialog.open(ProjectDetailsComponent, {
      data: exp,
      width: '80%',
      maxWidth: '796px',
    });
  }
}
