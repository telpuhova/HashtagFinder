import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TwitterApiService } from '../twitter-api.service';
import { twitterCredentials } from '../app.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ TwitterApiService ]
})
export class MainComponent implements OnInit {
  encodedCredentials: string;

  info: any[]=null;

  constructor(private twitterApiService: TwitterApiService) { }


  ngOnInit() {
  }

  postToObtainABearerTokenTest() {
    //encode credentials
    let consumerKey = twitterCredentials.TWITTER_CONSUMER_KEY;
    let consumerSecret = twitterCredentials.TWITTER_CONSUMER_SECRET;
    this.encodedCredentials = this.twitterApiService.encodeCredentials(consumerKey, consumerSecret);

    //post request to obtain bearer token
    this.twitterApiService.postToObtainABearerToken();
  }

  getInfoComponent() {

    //encode credentials
    let consumerKey = twitterCredentials.TWITTER_CONSUMER_KEY;
    let consumerSecret = twitterCredentials.TWITTER_CONSUMER_SECRET;
    this.encodedCredentials = this.twitterApiService.encodeCredentials(consumerKey, consumerSecret);

    //post request to obtain bearer token
    this.twitterApiService.postToObtainABearerToken();

    //Get request
    this.twitterApiService.getInfoTest().subscribe(response => {
      this.info = response.json();
    })
  }

}
