import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-key';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TrendsComponent } from './trends/trends.component';
import { TrendVolumePipe } from './trend-volume.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    TrendsComponent,
    TrendVolumePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(masterFirebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
