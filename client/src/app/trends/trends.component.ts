import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { TwitterService } from '../twitter.service';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css'],
  providers: [TwitterService]
})
export class TrendsComponent implements OnInit {
  trends: FirebaseListObservable<any[]>;
  output: any[] = [];
  constructor(private twitterService: TwitterService) {

  }

  ngOnInit() {
    this.trends = this.twitterService.getTrends();
  }

  displayTop5Trends() {

  }
  sort_by(field, reverse, primer){
    // let key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
    // reverse = !reverse ? 1 : -1;
    // return function (a, b) {
    //   return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    // }
  }
}
