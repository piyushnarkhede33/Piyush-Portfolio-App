import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, NgbCarouselModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  images = [
    {
      id: '1',
      src: '../../assets/skills/java.svg',
      name: 'Java',
    },
    {
      id: '2',
      src: '../../assets/skills/springboot.svg',
      name: 'SpringBoot',
    },
    {
      id: '3',
      src: '../../assets/skills/redis.svg',
      name: 'Redis',
    },
    {
      id: '4',
      src: '../../assets/skills/mysql.svg',
      name: 'MySQL',
    },
    {
      id: '5',
      src: '../../assets/skills/oracle.svg',
      name: 'OracleSQL',
    },
    {
      id: '6',
      src: '../../assets/skills/mongodb.svg',
      name: 'Mongo DB',
    },
    {
      id: '7',
      src: '../../assets/skills/html.svg',
      name: 'HTML',
    },
    {
      id: '8',
      src: '../../assets/skills/css.svg',
      name: 'CSS',
    },
    {
      id: '9',
      src: '../../assets/skills/javascript.svg',
      name: 'JavaScript',
    },
    {
      id: '10',
      src: '../../assets/skills/typescript.svg',
      name: 'TypeScript',
    },
    {
      id: '11',
      src: '../../assets/skills/angular.svg',
      name: 'Angular',
    },
    {
      id: '12',
      src: '../../assets/skills/nginx.svg',
      name: 'Nginx',
    },
    {
      id: '13',
      src: '../../assets/skills/jboss.svg',
      name: 'Jboss',
    },
    {
      id: '14',
      src: '../../assets/skills/git.svg',
      name: 'Git',
    },
    {
      id: '15',
      src: '../../assets/skills/microsoftoffice.svg',
      name: 'Microsoft Office',
    },
  ];

  repeatedImages = [...this.images, ...this.images];

  paused = false;
  }
