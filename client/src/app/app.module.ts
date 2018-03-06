import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import * as Twitter from 'twitter';
// import { twitter } from 'twitter';
import { masterTwitterCredentials } from './twitter-creds';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MainComponent } from './main/main.component';
import { InfoDisplayComponent } from './info-display/info-display.component';

export const twitterCredentials = {
  TWITTER_CONSUMER_KEY: masterTwitterCredentials.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: masterTwitterCredentials.TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN_KEY: masterTwitterCredentials.TWITTER_ACCESS_TOKEN_KEY,
  TWITTER_ACCESS_TOKEN_SECRET: masterTwitterCredentials.TWITTER_ACCESS_TOKEN_SECRET
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
