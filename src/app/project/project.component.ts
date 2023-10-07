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

  constructor(){}

  ngOnInit(): void {
   this.tech = this.projectInfo['tech'];
   console.log(this.tech);
  }
}
