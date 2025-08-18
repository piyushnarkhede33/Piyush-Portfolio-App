import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educations = [
    {
      degree : "Bachelors in Engineering",
      universityName : "Savitribai Phule Pune University",
      duration : "2018-2021",
      percentage : "74.04%",
      location : "Nashik, Maharashtra"
    },
    {
      degree : "Diploma in Engineering",
      universityName : "Maharashtra State Board of Technical Education",
      duration : "2015-2018",
      percentage : "79.53%",
      location : "Jalgaon, Maharashtra"
    },
    {
      degree : "Secondary School Certificate (SSC)",
      universityName : "Maharashtra State Board",
      duration : "2014-2015",
      percentage : "87.20%",
      location : "Bhusawal, Maharashtra"
    }
  ]
}
