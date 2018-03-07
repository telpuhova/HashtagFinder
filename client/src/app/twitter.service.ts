import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TwitterService {
  trends: FirebaseListObservable<any[]>
  output: any[] = [];
  constructor(private database: AngularFireDatabase) {
   this.trends = database.list('/trends', {
      query: {
        orderByChild: 'tweet_volume',
        limitToLast: 5
      }
   });
  }

  getTrends() {
    return this.trends;
  }
  getTestData() {

  }

  addTrends(localTrends) {
    let trendsInFirebase = this.database.object('trends');
    trendsInFirebase.update(localTrends);
  }

}
