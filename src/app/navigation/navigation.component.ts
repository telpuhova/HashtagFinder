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
  constructor(private twitterService : TwitterService) { }

  ngOnInit() {
  }
  // testLog() {
  //   console.log(this.twitterService.getTestData());
  // }
}
