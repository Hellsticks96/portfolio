import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') contactForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  btnTextContact = 'Send message :)'
  btnStyleContact = 'send-message-btn';

  constructor(){}

  ngOnInit(): void {
    
  }

  async sendMail(){
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);
    await fetch('https://leonhard-albert.developerakademie.net/send_mail/send_mail.php',
    {
      method: 'POST',
      body: formData
    }
    )
  }
}
