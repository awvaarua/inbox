import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GmailService {

  BASE_URL:string = 'https://www.googleapis.com/gmail/v1/users/me';
  messages:any [] = [];

  constructor( private http:Http ) {

  }

  getMessages() {
    let headers = new Headers();
    headers.append('authorization', 'Bearer ya29.GmPpBIXXuNHgl03s6G6G364fSuKmGK7eg6VySRk5RTkuq00uuKTVGa-tLjWYRKK5vaHFyBegqyYWHE7AphtxSZx_bDX3EkqKc5TFPWylbRBf4qw60Yz04upJZNrjb7t9App555g');

    let url = this.BASE_URL + '/messages?labelIds=UNREAD&maxResults=10';
    return this.http.get( url, { headers } )
              .map(res => res.json());
  }

  getMessage(id:string) {
    let headers = new Headers();
    headers.append('authorization', 'Bearer ya29.GmPpBIXXuNHgl03s6G6G364fSuKmGK7eg6VySRk5RTkuq00uuKTVGa-tLjWYRKK5vaHFyBegqyYWHE7AphtxSZx_bDX3EkqKc5TFPWylbRBf4qw60Yz04upJZNrjb7t9App555g');

    let url = this.BASE_URL + '/messages/' + id;
    return this.http.get( url, { headers } )
              .map(res => res.json());
  }

}
