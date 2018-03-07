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
  trends_portland: FirebaseListObservable<any[]>;
  trends_newyork: FirebaseListObservable<any[]>;
  trends_moscow: FirebaseListObservable<any[]>;
  trends_london: FirebaseListObservable<any[]>;
  trends_sydney: FirebaseListObservable<any[]>;
  output: any[] = [];
  constructor(private twitterService: TwitterService) {

  }

  ngOnInit() {
    this.trends = this.twitterService.getTrends();
    this.trends_portland = this.twitterService.getTrendsPortland();
    this.trends_newyork = this.twitterService.getTrendsNewYork();
    this.trends_moscow = this.twitterService.getTrendsMoscow();
    this.trends_london = this.twitterService.getTrendsLondon();
    this.trends_sydney = this.twitterService.getTrendsSydney();
  }
}
