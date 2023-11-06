import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slideMenuShowing = false;

  constructor(){}

  ngOnInit(): void {
    
  }

  showSlideMenu(){
    let menu = document.getElementById('slideMenu');
    if (this.slideMenuShowing == false) {
      menu?.classList.add('show-slide-menu');
      this.slideMenuShowing = true;
    } else {
      menu?.classList.remove('show-slide-menu');
      this.slideMenuShowing = false;
    }
  }
}
