import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { WOEIDS } from './woeids';
// import { masterEncodedCredentials } from 'app/encodedCredentials';


@Injectable()
export class TwitterApiService {
  tweetsdata;

  constructor(private http: Http) { }

  postToObtainABearerToken() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return this.http.post( 'http://localhost:3000/authorize', { headers: headers } );
  }

  getAllData() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return this.http.post('http://localhost:3000/top', {headers: headers});
  }

  getData(woeid: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    let woeidStr = 'query=' + woeid;
    console.log('woeid: ' + woeidStr)
    return this.http.post('http://localhost:3000/topByLocation', woeidStr, {headers: headers});
  }

}
