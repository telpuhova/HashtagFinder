import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TwitterService {
  trends: FirebaseListObservable<any[]>
  private http: HttpClient;

  constructor(private database: AngularFireDatabase) {
    this.trends = database.list('trends');
  }

  getTrends() {
    return this.trends;
  }
  getTestData() {
    // return this.http.get(urlToGet);
  }

}
