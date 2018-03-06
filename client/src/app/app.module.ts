import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-key';
// import * as Twitter from 'twitter';
// import { twitter } from 'twitter';
// import { masterTwitterCredentials } from './twitter-creds';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MainComponent } from './main/main.component';
import { InfoDisplayComponent } from './info-display/info-display.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TrendsComponent } from './trends/trends.component';

// export const twitterCredentials = {
//   TWITTER_CONSUMER_KEY: masterTwitterCredentials.TWITTER_CONSUMER_KEY,
//   TWITTER_CONSUMER_SECRET: masterTwitterCredentials.TWITTER_CONSUMER_SECRET,
//   TWITTER_ACCESS_TOKEN_KEY: masterTwitterCredentials.TWITTER_ACCESS_TOKEN_KEY,
//   TWITTER_ACCESS_TOKEN_SECRET: masterTwitterCredentials.TWITTER_ACCESS_TOKEN_SECRET
// }

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoDisplayComponent,
    NavigationComponent,
    TrendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
