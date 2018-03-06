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

  info: any[]=null;

  constructor(private twitterApiService: TwitterApiService) { }

  ngOnInit() {
  }

  postToObtainABearerTokenTest() {
    this.twitterApiService.postToObtainABearerToken().subscribe(response => {
        console.log(response.json());
    });
  }

  getInfo() {
    this.twitterApiService.getInfo();
  }

}
