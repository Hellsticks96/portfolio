import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() projectInfo: any;
  tech = [];
  techname = '';
  btnTextTestProject = 'Test now!';
  btnTextGit = 'Github';
  btnStyleTestBtn = 'test-btn';
  btnStyleGit = 'git-btn';

  constructor(){}

  ngOnInit(): void {
   this.tech = this.projectInfo['tech'];
   console.log(this.tech);
  }
}
