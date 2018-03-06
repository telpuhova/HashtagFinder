import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TwitterApiService } from '../twitter-api.service';
import { TwitterService } from '../twitter.service';
import { twitterCredentials } from '../app.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ TwitterApiService, TwitterService ]
})
export class MainComponent implements OnInit {

  info: any[]=null;

  constructor(private twitterApiService: TwitterApiService, private twitterService: TwitterService) { }

  ngOnInit() {
  }

  authenticate() {
    this.twitterApiService.postToObtainABearerToken().subscribe(response => {
        console.log(response.json());
    });
  }

  getInfo() {
    this.info = this.twitterApiService.getData().trends;
    // this.twitterService.update(this.info);
  }

}
