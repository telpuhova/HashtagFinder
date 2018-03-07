import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { TwitterService } from '../twitter.service';
import { FirebaseListObservable } from 'angularfire2/database';
// import { PlotlyComponent } from '../plotly/plotly.component';
@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css'],
  providers: [TwitterService]
})
export class TrendsComponent implements OnInit {
  trends: FirebaseListObservable<any[]>;
  output: any[] = [];
  private PlotlyLayout: any;
  private PlotlyData: any;
  private PlotlyOptions: any;
  constructor(private twitterService: TwitterService) {

  }

  ngOnInit() {
    this.trends = this.twitterService.getTrends();
  }

  displayTop5Trends() {

  }
  sort_by(field, reverse, primer){
    // let key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
    // reverse = !reverse ? 1 : -1;
    // return function (a, b) {
    //   return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    // }
  }

//   private setReturnedData(data:any) {
//     this.twitterService.getTrends= data;
//     this.PlotlyLayout = {
//       height: 500,
//       width: 1200
//     };
//
//     // this.PlotlyData = [
//     //   {
//     //     x: this.twitterService.getTrends.X,
//     //   }
//
//     ]
//   }
 }
