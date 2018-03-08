import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TwitterService} from '../twitter.service'
import * as Plotly from 'plotly.js';
import { bar } from 'plotly.js';
@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css'],
  providers: [TwitterService]
})
export class PlotlyComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  constructor(private twitterService: TwitterService) { }

  ngOnInit() {
    this.basicChart()
  }


  basicChart() {
    //const element = this.el.nativeElement;
    let trendData = this.twitterService.getTopTags(true);
    var trace1 = {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23],
      type: 'bar'
    };
    var data = [trace1];
    //console.log("test "+element)
    Plotly.newPlot('chart', data);
  }
}
