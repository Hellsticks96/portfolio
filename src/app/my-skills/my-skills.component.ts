import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  btnTextSkills = 'Get in Touch';
  btnStyleMySkills = 'contact-btn';
  public contactBtnUrl = '#contactSection';
  technologies = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Rest-API', 'Scrum', 'MaterialDesign'];

  constructor(){}

  ngOnInit(): void {
    
  }

  scrollToContact(){
    let contact = document.getElementById('contactSection');
    contact?.scrollIntoView();
  }
}
