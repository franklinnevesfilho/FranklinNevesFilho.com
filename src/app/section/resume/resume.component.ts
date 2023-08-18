import { Component } from '@angular/core';
import {Job} from "./Job.model";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  jobsList: Job[] = [
    new Job(
      'Laranjeiras Corp, Recife Brazil',
      'Intern',
      'Aug 2021 - Jan 2023',
      [
        'Assist on Design of MySql Database.',
        'Assist on creating front end application using Angular',
        'Assist on creating back end application using Spring Boot'
      ]),
    new Job(
      'Laranjeiras Corp, Recife Brazil',
      'Intern',
      'Aug 2021 - Jan 2023',
      [
        'Assist on Design of MySql Database.',
        'Assist on creating front end application using Angular',
        'Assist on creating back end application using Spring Boot'
      ]),
    new Job(
      'Laranjeiras Corp, Recife Brazil',
      'Intern',
      'Aug 2021 - Jan 2023',
      [
        'Assist on Design of MySql Database.',
        'Assist on creating front end application using Angular',
        'Assist on creating back end application using Spring Boot'
      ]),
    new Job(
      'Laranjeiras Corp, Recife Brazil',
      'Intern',
      'Aug 2021 - Jan 2023',
      [
        'Assist on Design of MySql Database.',
        'Assist on creating front end application using Angular',
        'Assist on creating back end application using Spring Boot'
      ])
  ]

}
