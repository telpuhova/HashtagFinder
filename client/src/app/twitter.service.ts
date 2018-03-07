import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { WOEIDS } from './woeids';

@Injectable()
export class TwitterService {
  trends: FirebaseListObservable<any[]>;
  output: any[] = [];
  constructor(private database: AngularFireDatabase) {
   this.trends = database.list('/trends', {
      query: {
        orderByChild: 'tweet_volume',
        limitToLast: 5
      }
   }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;

   this.trends_portland = database.list('/trends_portland', {
      query: {
        orderByChild: 'tweet_volume',
        limitToLast: 5
      }
   }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;

   this.trends_newyork = database.list('/trends_newyork', {
      query: {
        orderByChild: 'tweet_volume',
        limitToLast: 5
      }
   }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;

   this.trends_moscow = database.list('/trends_moscow', {
      query: {
        orderByChild: 'tweet_volume',
        limitToLast: 5
      }
   }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;

   this.trends_london = database.list('/trends_london', {
      query: {
        orderByChild: 'tweet_volume',
        limitToLast: 5
      }
   }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
   this.trends_sydney = database.list('/trends_sydney', {
      query: {
        orderByChild: 'tweet_volume',
        limitToLast: 5
      }
   }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
  }

  getTrends() {
    return this.trends;
  }
  getTrendsPortland() {
    return this.trends_portland;
  }
  getTrendsNewYork() {
    return this.trends_newyork;
  }
  getTrendsMoscow() {
    return this.trends_moscow;
  }
  getTrendsLondon() {
    return this.trends_london;
  }
  getTrendsSydney() {
    return this.trends_sydney;
  }

  addTrends(localTrends) {
    let trendsInFirebase = this.database.object('trends');
    trendsInFirebase.set(localTrends);
  }

  addTrendsByLocation(localTrends, locationIndex) {
    let trendsInFirebase = this.database.object(WOEIDS[locationIndex].city);
    trendsInFirebase.set(localTrends);
  }

}
