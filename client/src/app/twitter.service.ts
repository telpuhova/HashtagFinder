import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TwitterService {
  trends: FirebaseListObservable<any[]>;
  trends_portland: FirebaseListObservable<any[]>;
  trends_newyork: FirebaseListObservable<any[]>;
  output: any[] = [];
  constructor(private database: AngularFireDatabase) {
   this.trends = database.list('/trends', {
      query: {
        orderByChild: 'tweet_volume',
        limitToLast: 5
      }
   }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;

   this.trends_portland = database.list('/trends_multnomah', {
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
  getTestData() {

  }

  addTrends(localTrends) {
    let trendsInFirebase = this.database.object('trends');
    trendsInFirebase.update(localTrends);
  }

  addTrendsByLocation(localTrends, locationIndex) {
    let trendsInFirebase = this.database.object('trends');

    let obj = {};
    obj['trends_moscow'] = localTrends;
    trendsInFirebase.update(obj);
  }

}
