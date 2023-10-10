import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  btnTextLandingpage = 'Let´s talk!'
  btnStyleLandingpage = 'contact-btn';

  constructor(){}

  ngOnInit(): void {
    
  }
}
