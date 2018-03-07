import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TwitterApiService } from '../twitter-api.service';
import { TwitterService } from '../twitter.service';
import { WOEIDS } from '../woeids';

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
    this.authenticate();
  }

  authenticate() {
    this.twitterApiService.postToObtainABearerToken().subscribe(response => {
        // console.log(response.json());
        console.log('Authentication successful.');
    });
  }

  getAllInfo() {
    this.twitterApiService.getAllData().subscribe(response => {
      this.info = response.json().data[0].trends;
      this.twitterService.addTrends(this.info);
    });
  }

  getInfo() {
    this.getAllInfo();
    for (let i=0; i<5; i++) {
      let woeid = WOEIDS[i].id
      this.twitterApiService.getData(woeid).subscribe(response => {
        this.info = response.json().data[0].trends;
        this.twitterService.addTrendsByLocation(this.info, i);
      });
    }
  }

}
