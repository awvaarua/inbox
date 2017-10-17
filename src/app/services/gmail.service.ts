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
    headers.append('authorization', 'Bearer ya29.GmPnBB028_D7oKGLStc8trorUdgjDzofrD6xQOkIy0BjMV0MyY6-dLKSKPmV7rd1S7XGwR728nayb4nc2F6Y52PEekM8ZtffOy4RgY-UX7qPZZ6c4w-olk3zeSet6QL5YAmEyR0');

    let url = this.BASE_URL + '/messages';
    return this.http.get( url, { headers } )
              .map(res => res.json());
  }

}
