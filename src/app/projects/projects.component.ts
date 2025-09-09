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
      role: 'Full Stack Developer',
      duration: 'Mar 2024 - Mar 2024',
      tools: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'Spring MVC',
        'REST API',
        'JPA/Hibernate',
        'MySql',
      ],
      overview:
        'Developed a secure Employee Management System with role-based access (Admin & User), enabling login, employee CRUD operations, and RESTful service integration using Spring Boot and Spring Security.',
      features: [
        'Role-based authentication and authorization (Admin & User) using Spring Security',
        'Login & logout functionality with session management',
        'Admin features: View all users, create new Normal users',
        'Normal user features: View all employees via REST API',
        'Employee detail view: Retrieve full employee details via REST API',
        'Separation of concerns using layered architecture (Controller, Service, Repository)',
        'RESTful API design for employee retrieval and management',
        'Database integration with JPA/Hibernate and MySQL support',
      ],
      contributions: [
        {
          key: 'security',
          value:
            'Implemented role-based authentication and authorization using Spring Security.',
        },
        {
          key: 'apiDevelopment',
          value:
            'Developed REST APIs for employee listing, detail retrieval, and user management.',
        },
        {
          key: 'databaseIntegration',
          value:
            'Configured Hibernate/JPA with MySQL and H2DB for persistence and CRUD operations.',
        },
        {
          key: 'architectureDesign',
          value:
            'Applied MVC and REST design patterns for scalability and clean separation of concerns.',
        },
        {
          key: 'uiImplementation',
          value:
            'Created simple UI screens for login, home, employee list, and employee details.',
        },
      ],
      impact:
        'Delivered a secure and scalable Employee Management System demonstrating enterprise-grade authentication, RESTful services, and modern Spring Boot practices.',
    },
    {
      name: 'High-Volume Data Ingestion and Processing System',
      role: 'Backend Developer',
      duration: 'Jul 2023 - Oct 2023',
      tools: [
        'Java',
        'Spring Boot',
        'Spring Batch',
        'JPA/Hibernate',
        'MySql',
        'Logback',
      ],
      overview:
        'Built a Spring Boot and Spring Batch based ETL system that ingests lakhs of records from CSV files, processes and transforms data, and loads it into a relational database with fault-tolerance and scalability.',
      features: [
        'Reads and processes lakhs of records from large CSV files',
        'Chunk-oriented and multi-threaded batch processing',
        'Custom processors for data validation and transformation',
        'Graceful error handling with skip/retry logic',
        'Job restartability and audit tracking using Spring Batch meta tables',
        'Externalized configurations for file, file path, and chunk size',
        'Optimized bulk inserts for high-performance data ingestion',
        'Scalable design suitable for enterprise ETL and migration use cases',
      ],
      contributions: [
        {
          key: 'processing',
          value:
            'Designed Spring Batch pipeline to process lakhs of CSV records with chunk-oriented and parallel execution.',
        },
        {
          key: 'optimization',
          value:
            'Optimized batch inserts and transactions to reduce DB load and improve ingestion speed.',
        },
        {
          key: 'architectureDesign',
          value:
            'Architected the ETL workflow ensuring scalability, restartability, and modular design.',
        },
        {
          key: 'apiDevelopment',
          value:
            'Exposed configuration endpoints to control batch jobs and externalized job properties.',
        },
      ],
      impact:
        'Achieved reliable, scalable, and fault-tolerant ingestion of millions of rows with significant reduction in processing time.',
    },
    {
      name: 'Ekart Application',
      role: 'Backend Developer',
      duration: 'Jan 2022 - Jan 2022',
      tools: [
        'Java',
        'Spring Boot',
        'Spring Cloud',
        'REST API',
        'Microservices',
        'JPA/Hibernate',
        'MySql',
        'Eureka / Service Discovery',
        'Zuul / API Gateway',
        'Feign Client',
        'Logback',
      ],
      overview:
        'Developed a backend-only e-commerce platform using Spring Boot microservices architecture, with independent services for product, customer, user, and orders to ensure scalability, modularity, and efficient service orchestration.',
      features: [
        'Independent microservices for product, customer, user, and orders',
        'Service-to-service communication using REST and Feign clients',
        'API Gateway for centralized routing and authentication',
        'Eureka service discovery for dynamic microservice registration',
        'Fault-tolerance and scalability through distributed design',
        'Database-per-service approach ensuring data isolation',
        'Centralized logging and monitoring for services',
        'Service orchestration for smooth inter-service workflows',
      ],
      contributions: [
        {
          key: 'architectureDesign',
          value:
            'Designed a robust microservices architecture, breaking down monolithic components into independent services.',
        },
        {
          key: 'apiDevelopment',
          value:
            'Developed RESTful APIs for product, customer, user, and order management services.',
        },
        {
          key: 'serviceOrchestration',
          value:
            'Implemented service orchestration patterns to enable smooth communication between microservices.',
        },
        {
          key: 'databaseIntegration',
          value:
            'Configured separate databases for services using JPA/Hibernate ensuring loose coupling.',
        },
        {
          key: 'security',
          value:
            'Integrated API Gateway with role-based authentication for secured access across services.',
        },
      ],
      impact:
        'Delivered a scalable and modular e-commerce backend demonstrating modern microservices best practices with improved maintainability and efficiency.',
    },
    {
      name: 'Personal Portfolio App',
      role: 'Full Stack Developer',
      duration: 'Aug 2025 - Sept 2025',
      tools: ['Angular', 'TypeScript', 'HTML5', 'CSS3 / Bootstrap'],
      overview:
        'Developing a personal portfolio website to showcase projects, skills, and experience with a responsive UI and clean design.',
      features: [
        'Responsive and mobile-friendly design',
        'Dynamic project rendering using JSON objects',
        'Navigation with smooth routing between sections',
      ],
      contributions: [
        {
          key: 'uiImplementation',
          value:
            'Designed and developed responsive UI components for portfolio sections (About, Skills, Projects, Contact).',
        },
        {
          key: 'apiIntegration',
          value:
            'Integrated project data dynamically using JSON rendering for easy updates.',
        },
        {
          key: 'architectureDesign',
          value:
            'Structured the project with modular components and clean folder hierarchy.',
        },
        {
          key: 'optimization',
          value: 'Optimized layout, assets, and images for faster load times.',
        },
      ],
      impact:
        'Showcases technical expertise, projects, and experience in a professional, interactive, and recruiter-friendly format.',
    },
  ];

  constructor(private dialog: MatDialog) {}

  openDetails(exp: any) {
    this.dialog.open(ProjectDetailsComponent, {
      data: exp,
      width: '80%',
      height: '90%',
      maxWidth: '796px',
    });
  }
}
