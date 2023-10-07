import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: any = [
    {
      'name': 'Join',
      'tech': ['JavaScript', 'GIT', 'HTML', 'CSS'],
      'description': 'Taskmanager inspired by the Kanban System. Create, assign and organize tasks. You can use drag and drop and also add categories.'
    },

    {
      'name': 'El Pollo Loco',
      'tech': ['JavaScript', 'GIT', 'HTML', 'CSS'],
      'description': 'This is a simple jump and run game using JavaScript with an object-oriented approach. Collect bootles and coins, jump on enemies and help Pepe defeat the boss-chicken!'
    }
  ];

  constructor(){}

  ngOnInit(): void {
    
  }
}
