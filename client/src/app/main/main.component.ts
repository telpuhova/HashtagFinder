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
  }

  authenticate() {
    this.twitterApiService.postToObtainABearerToken().subscribe(response => {
        console.log(response.json());
    });
  }

  getAllInfo() {
    this.twitterApiService.getAllData().subscribe(response => {
      console.log("component: getInfo: twitterApiService.getData().subscribe: response.json");
      console.log(response.json());
      this.info = response.json().data[0].trends;
      console.log(this.info);
      this.twitterService.addTrends(this.info);
    });
  }

  getInfo() {
    for (let i=0; i<5; i++) {
      let woeid = WOEIDS[i].id
      this.twitterApiService.getData(woeid).subscribe(response => {
        console.log("component: getInfo: twitterApiService.getData().subscribe: response.json");
        console.log(response.json());
        this.info = response.json().data[0].trends;
        console.log('just the trends: ');
        console.log(this.info);
        this.twitterService.addTrendsByLocation(this.info, i);
      });
    }
  }

}
