import { Component, OnInit, Input } from '@angular/core';
import { GmailService } from '../../services/gmail.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() id:string;
  message:any;

  constructor( private _gmailService:GmailService ) { }

  ngOnInit() {
    this._gmailService.getMessage(this.id)
        .subscribe(
          (data) => { this.message = data; console.log(data) },
          (err) =>  { console.log(err) });
  }

  public getFrom() {
    return this.getFromHeaders('From');
  }

  public getDeliveredTo() {
    return this.getFromHeaders('Delivered-To');
  }

  private getFromHeaders(name:string) {
    for (let i = 0; i < this.message.payload.headers.length; i++) {
      let header = this.message.payload.headers[i];
      if (header && header.name == name) {
        return header.value;
      }
    }
    return 'Not found';
  }

}
/*
historyId
:
"1228124"
id
:
"15c4f57b534cddde"
internalDate
:
"1495979661000"
labelIds
:
(3) ["UNREAD", "IMPORTANT", "CATEGORY_UPDATES"]
payload
:
{partId: "", mimeType: "text/html", filename: "", headers: Array(23), body: {…}}
sizeEstimate
:
21477
snippet
:
"© 2017 - Sociedad Estatal Loterías y Apuestas del Estado, SME, SA ★ Más de 250 años contigo, al servicio de tus sueños ★ &lt; td&gt; alt_text alt_text Hola Sebastia: Te notificamos que el saldo actual"
threadId
:
"15c4f57b534cddde"
__proto__
:
Object
*/
