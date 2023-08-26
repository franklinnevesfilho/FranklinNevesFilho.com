import {Component, ElementRef, ViewChild, Renderer2, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('resume') resume !: ElementRef;
  title = 'franklinnevesfilho-web';
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.resume.nativeElement.focus();
  }

  onClicked(link: string){
    if(link == 'Resume'){
    }
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }



}
