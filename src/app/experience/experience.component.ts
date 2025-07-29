import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      companyName: 'Finastra Ltd',
      designation: 'Software Engineer',
      client: 'Bank of Ireland',
      duration: 'Aug 2024 - Present',
      location: 'Pune, Maharashtra',
      status: 'Present',
      description: [
        'Achieved a 50% improvement in data processing efficiency by implementing multithreading techniques in the Spring Batch process, resulting in faster and more responsive data ingestion.',
        'Led and mentored a team of 3 members, resulting in a 15% increase in overall team productivity and successful delivery of project milestones within specified timelines.',
        'Authored a comprehensive design for  key microservice, detailing the architectural considerations, data flow, and integration points within the broader system.',
        'Spearheaded  development of a robust Spring Batch process, processing 1,00,000 records per minute with a 98% accuracy rate, demonstrating expertise in Java, Spring Boot, and Spring Data JPA.',
        'Implemented session management using Spring Web Session, enhancing application security and  session-related incidents by 25%.',
        'Created and maintained multiple REST APIs using Spring Boot, Spring Data JPA and Swagger, contributing to a 30% reduction in API response times and improving overall system interoperability.',
      ],
    },
    {
      companyName: 'Infosys Ltd',
      designation: 'Senior System Engineer',
      client: 'ICICI Bank',
      duration: 'Nov 2021 - Aug 2024',
      location: 'Pune, Maharashtra',
      status: 'Completed',
      description: [
        'Achieved a 50% improvement in data processing efficiency by implementing multithreading techniques in the Spring Batch process, resulting in faster and more responsive data ingestion.',
        'Led and mentored a team of 3 members, resulting in a 15% increase in overall team productivity and successful delivery of project milestones within specified timelines.',
        'Authored a comprehensive design for  key microservice, detailing the architectural considerations, data flow, and integration points within the broader system.',
        'Spearheaded  development of a robust Spring Batch process, processing 1,00,000 records per minute with a 98% accuracy rate, demonstrating expertise in Java, Spring Boot, and Spring Data JPA.',
        'Implemented session management using Spring Web Session, enhancing application security and  session-related incidents by 25%.',
        'Created and maintained multiple REST APIs using Spring Boot, Spring Data JPA and Swagger, contributing to a 30% reduction in API response times and improving overall system interoperability.',
        'Utilized MySQL for database management and Redis Cache for efficient data caching, resulting in a 25% reduction in database query times and a 20% improvement in system performance.',
        'Developed responsive front-end interfaces of web applications using HTML5, CSS3, and Angular, leading to a 25% improvement in user engagement and a 15% decrease in bounce rate.',
        'Integrated RESTful APIs with Angular services to facilitate seamless communication between the front-end and back-end components, ensuring efficient data flow.',
        'Engaged in regular code reviews, providing constructive feedback that contributed to a 30% improvement in code quality and alignment with best practices.',
        'Embraced Agile practices, contributing to rapid development cycles and iterative improvements, resulting in on-time project deliveries.',
      ],
    },
  ];
}
