import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Output() buttonPress: EventEmitter<string> = new EventEmitter<string>();

  navLinks = [
    'Resume',
    'Projects',
    'About me'
  ]
  logoColor = 'white'
  ngOnInit() {
  }
  navBar(link: string) {
    this.buttonPress.emit(link);
  }
}
