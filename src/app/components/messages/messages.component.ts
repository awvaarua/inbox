import { Component, OnInit } from '@angular/core';
import { GmailService } from '../../services/gmail.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages:string [] = [];

  constructor( private _gmailService:GmailService ) { }

  ngOnInit() {
    this._gmailService.getMessages()
        .subscribe(
          (data) => { this.messages = data.messages },
          (err) =>  { console.log(err) });
  }

}
