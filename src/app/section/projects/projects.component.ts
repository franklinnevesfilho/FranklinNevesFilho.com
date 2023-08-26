import { Component } from '@angular/core';
import {Project} from "./project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects : Project[] = [
    {
      name:'Personal Website',
      imgPath: 'assets/images/pwebsite.png',
      description: 'My personal website using Angular and bootstrap to design a portfolio.'
    },
    {
      name:'Weather App',
      imgPath: 'assets/images/weatherapp.png',
      description: 'A simple weather web-app using HTML CSS AND JS, using a weather api to be able to access current weather information'
    },
    {
      name:'Hangman',
      imgPath: 'assets/images/hangman.png',
      description: 'A hangman desktop app using Java. The GUI was created using Java Swing and designed by me'
    },
    {
      name:'AtoZ Towels Display Totem',
      imgPath: 'assets/images/atoztowels.png',
      description: 'A web application to show the catalog of a towel distributor in Miami, played indefinitely on a digital totem. Using HTML CSS (bootstrap) and JS'
    },
    {
      name:'Android Memory Game',
      imgPath: 'assets/images/memorygame.jpg',
      description: 'A card matching match game using Kotlin for android devices. All images were created and designed by me.'
    }
  ]

}
