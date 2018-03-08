import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { WOEIDS } from './woeids';

@Injectable()
export class TwitterService {
  trends: FirebaseListObservable<any[]>;
  trends_portland: FirebaseListObservable<any[]>;
  trends_newyork: FirebaseListObservable<any[]>;
  trends_moscow: FirebaseListObservable<any[]>;
  trends_london: FirebaseListObservable<any[]>;
  trends_sydney: FirebaseListObservable<any[]>;

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
  getTopTags() {
    let output: any[] = [[],[]];
    let allTrends: any[] = [this.trends, this.trends_portland, this.trends_newyork, this.trends_moscow, this.trends_london, this.trends_sydney];
    for(let i = 0; i < allTrends.length; i++) {
      allTrends[i].forEach(function(child){
        for(let x = 0; x < child.length; x++){
          output[0].push(child[x].name);
          output[1].push(child[x].tweet_volume);
        }
      });
    }
    console.log(output);
    return output;
  }

  viewByTag(trend) {
    let output: any[]  = [];
    let portland: FirebaseListObservable<any[]>;
    let newYork: FirebaseListObservable<any[]>;
    let moscow: FirebaseListObservable<any[]>;
    let london: FirebaseListObservable<any[]>;
    let sydney: FirebaseListObservable<any[]>;
    newYork = this.database.list('/trends_newyork');
    newYork.forEach(function(child){
      for(let i = 0; i < child.length; i++){
        if(trend.name === child[i].name) {
            console.log(child[i].name + " " + child[i].tweet_volume);
            output.push({"New York": child[i].tweet_volume});
        }
      }
    });
    portland = this.database.list('/trends_portland');
    portland.forEach(function(child){
      for(let i = 0; i < child.length; i++){
        if(trend.name === child[i].name) {
            console.log(child[i].name + " " + child[i].tweet_volume);
            output.push({"Portland": child[i].tweet_volume});
        }
      }
    });

    moscow = this.database.list('/trends_moscow');
    moscow.forEach(function(child){
      for(let i = 0; i < child.length; i++){
        if(trend.name === child[i].name) {
            console.log(child[i].name + " " + child[i].tweet_volume);
            output.push({"Moscow": child[i].tweet_volume});
        }
      }
    });

    london = this.database.list('/trends_london');
    london.forEach(function(child){
      for(let i = 0; i < child.length; i++){
        if(trend.name === child[i].name) {
            console.log(child[i].name + " " + child[i].tweet_volume);
            output.push({"London": child[i].tweet_volume});
        }
      }
    });
    sydney = this.database.list('/trends_sydney');
    sydney.forEach(function(child){
      for(let i = 0; i < child.length; i++){
        if(trend.name === child[i].name) {
            console.log(child[i].name + " " + child[i].tweet_volume);
            output.push({"Sydney": child[i].tweet_volume});
        }
      }
    });
    console.log(output);
  }

}
