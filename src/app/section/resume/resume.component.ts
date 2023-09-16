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
      'FIU',
      'Software Engineering Group Leader',
      'Aug 2023 - present',
      [
        "Designed project structure and defined technologies to use",
        "Create UML diagrams and timeline for project.",
        "Generated a document for beginner teammates to familiarize themselves with technologies."
      ]),
    new Job(
      'The Doral Yard, Miami FL',
      'Bartender',
      'Jan 2023 - Jun 2023',
      [
        'Quickly prepare a variety of cocktails for customers.',
        'Be able to maintain an entire bar entertained and well served throughout the night.',
        'Be aware of the customer\'s limits and serve accordingly.',
        'Assist barback with preparations for the day.'
      ]),
    new Job(
      'The Doral Yard, Miami FL',
      'Barback Leader',
      'Oct 2022 - Jan 2023',
      [
        'Manage and coordinate a team of 3 to ensure preparation for the upcoming day',
        'Aware of bartenders supply and restock as needed.',
        'Maintain organization throughout the bar for operations to run smoothly.',
      ]),
    new Job(
      'Laranjeiras Corp, Recife Brazil',
      'Intern',
      'Aug 2021 - Jan 2022',
      [
        'Assist on Design of MySql Database.',
        'Assist on creating front end application using Angular',
        'Assist on creating back end application using Spring Boot'
      ]),
    new Job(
      'A to Z Towels, Miami FL',
      'Shipping Manager',
      'May 2016 - Oct 2022',
      [
        'Managed and organized inventory throughout three storage locations',
        'Created a company-wide system that optimized storage operations in the department',
        'Designed an application to display merchandise for digital totem'
      ])
  ]

}
