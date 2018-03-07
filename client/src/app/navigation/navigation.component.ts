import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { NgIf } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [TwitterService]
})
export class NavigationComponent implements OnInit {
  // private urlToGet: string = "https://api.twitter.com/1.1/trends/place.json?id=1&oauth_consumer_key=R0buqUGc9Hz3BypSDnrpdlalV&oauth_token=3189513013-TmhhwEbmTrgg89A8bIZfVrEFhkqaZ0lGjYqSp2N&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1520290900&oauth_nonce=oJFmnBLHJCv&oauth_version=1.0&oauth_signature=bTV3w5%2FvZMni9wpRYYhra%2FYxIvI%3D";

  constructor(private twitterService : TwitterService) { }

  ngOnInit() {
  }
}
