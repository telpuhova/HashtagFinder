import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { HttpHeaders } from '@angular/common/http';
import { masterEncodedCredentials } from 'app/encodedCredentials';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/x-www-form-urlencoded;charset=UTF-8',
//     'Authorization': 'Basic ' + masterEncodedCredentials.encodedString
//   })
// };

@Injectable()
export class TwitterApiService {

  localEncodedCredentials: string;
  tweetsdata;

  constructor(private http: Http) { }

  // encodeCredentials(consumerKey: string, consumerSecret: string) {
  //   let concatenated = consumerKey + ':' + consumerSecret;
  //   this.localEncodedCredentials = btoa(concatenated);
  //   masterEncodedCredentials.encodedString = this.localEncodedCredentials;
  //
  //   return btoa(concatenated);
  // }

  addCustomHeaders(headers:Headers) {
    // headers.append('Authorization', 'Basic ' + masterEncodedCredentials.encodedString);
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
  }

  postToObtainABearerToken() {
    var headers = new Headers();

    // this.addCustomHeaders(headers);
    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    return this.http.post(
      'http://localhost:3000/authorize', { headers: headers }
    );
  }

  getInfo() {
    var headers = new Headers();
    var searchterm = 'query=oscars';

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
      console.log(this.tweetsdata);
    });
  }

  getInfoTest() {
    return this.http.get('https://api.twitter.com/1.1/trends/place.json?id=1')
  }

}
