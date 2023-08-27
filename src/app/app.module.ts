import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResumeComponent } from './section/resume/resume.component';
import { ProjectsComponent } from './section/projects/projects.component';
import { AboutMeComponent } from './section/about-me/about-me.component';
import { ContactComponent } from './section/contact/contact.component';
import { LogoComponent } from './logo/logo.component';
import { IntroComponent } from './section/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResumeComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactComponent,
    LogoComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
