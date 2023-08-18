import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit{
  @Input('color') color: string = '';
  @Input('fontSize') size: string = '60px';
  constructor() {
  }
  ngOnInit() {}
}
