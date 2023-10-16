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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LegalComponent } from './legal/legal.component';
import { ContentPageComponent } from './content-page/content-page.component';


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
    PortraitComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    LegalComponent,
    ContentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
