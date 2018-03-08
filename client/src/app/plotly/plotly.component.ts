import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService} from '../chart.service'
import * as Plotly from 'plotly.js';
// import { graph_objs } from 'plotly.js';


@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css'],
  providers: [ChartService]
})
export class PlotlyComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.basicChart()
  }


  basicChart() {
    //const element = this.el.nativeElement;

    var trace1 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      mode: 'markers',
      type: 'scatter'
    };

    var trace2 = {
      x: [2, 3, 4, 5],
      y: [16, 5, 11, 9],
      mode: 'lines',
      type: 'scatter'
    };

    var trace3 = {
      x: [1, 2, 3, 4],
      y: [12, 9, 15, 12],
      mode: 'lines+markers',
      type: 'scatter'
    };

    var layout = {
      title: 'Sales Growth',
      xaxis: {
        title: 'Year',
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        title: 'Percent',
        showline: false
      }
    };
    var data = [trace1, trace2, trace3];
    //console.log("test "+element)
    Plotly.newPlot('chart', data, layout);
  }
}
