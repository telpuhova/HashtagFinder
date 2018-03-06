import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { masterEncodedCredentials } from 'app/encodedCredentials';


@Injectable()
export class TwitterApiService {
  tweetsdata;

  constructor(private http: Http) { }

  postToObtainABearerToken() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    return this.http.post(
      'http://localhost:3000/authorize', { headers: headers }
    );
  }

  getInfo() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/top', {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json();
      console.log("twitterservice: getInfo: top request");
      console.log(this.tweetsdata);
    });
  }

}
