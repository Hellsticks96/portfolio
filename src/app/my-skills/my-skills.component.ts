import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  public btnTextSkills = 'Get in Touch';
  public technologies = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Firebase', 'GIT', 'CSS', 'Rest-API', 'Scrum', 'MaterialDesign'];

  constructor(){}

  ngOnInit(): void {
    
  }
}
