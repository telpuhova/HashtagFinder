import { Component, Input, OnInit } from '@angular/core';
// import { twitterCredentials } from '../app.module';

@Component({
  selector: 'app-info-display',
  templateUrl: './info-display.component.html',
  styleUrls: ['./info-display.component.css']
})
export class InfoDisplayComponent implements OnInit {
  // testCredential = twitterCredentials.TWITTER_CONSUMER_KEY;

  @Input() childInfo;


  constructor() { }

  ngOnInit() {
  }

}
