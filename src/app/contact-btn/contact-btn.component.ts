import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-btn',
  templateUrl: './contact-btn.component.html',
  styleUrls: ['./contact-btn.component.scss']
})
export class ContactBtnComponent implements OnInit {

  @Input() btnText: any;
  @Input() btnStyle: any;
  @Input() btnUrl: any;

  constructor(){}

  ngOnInit(): void {
    
  }


}
