import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TwitterService} from '../twitter.service'
import * as Plotly from 'plotly.js';
// import { graph_objs } from 'plotly.js';


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
    let graphArray = this.twitterService.getTopTags();
    const element = this.el.nativeElement;
    console.log("grapharray: "+graphArray);
    // var trace1 = {};
    // trace1["x"]= graphArray[0];
    // trace1["y"] = graphArray[1];
    // trace1["type"] = 'bar';
    // trace1["marker"] = {
    //   color: 'rgb(142,124,195)'
    // };
    // console.log(trace1);
    var trace1 = {
      x: graphArray[0],
      y: graphArray[1],
      type: 'bar',
      marker: {
        color: 'rgb(142,124,195)'
      }
    };

    var data = [trace1];

    var layout = {
      title: 'Popularity',
      autorange: true
    };

    Plotly.newPlot(element, data, layout);
  }
}
