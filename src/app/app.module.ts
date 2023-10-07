import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { TechnologyComponent } from './technology/technology.component';
import { ContactBtnComponent } from './contact-btn/contact-btn.component';
import { MainImgComponent } from './main-img/main-img.component';
import { NameTitleComponent } from './name-title/name-title.component';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';
import { ReferencesComponent } from './references/references.component';
import { AboutMeInfoComponent } from './about-me-info/about-me-info.component';
import { PortraitComponent } from './portrait/portrait.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    AboutMeComponent,
    MySkillsComponent,
    TechnologyComponent,
    ContactBtnComponent,
    MainImgComponent,
    NameTitleComponent,
    ScrollDownComponent,
    ReferencesComponent,
    AboutMeInfoComponent,
    PortraitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
