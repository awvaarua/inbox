import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { GmailService } from './services/gmail.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    MessageComponent
  ],
  imports: [
    MatCardModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    GmailService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
