import { Component, EventEmitter, Input, Output, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { TrendsComponent } from '../trends/trends.component';
import *  as Plotly from  'plotly.js';
import { ChartService} from '../chart.service';
import * as _ from 'lodash';
// import {Plotly} from './plotly.typings.d'

declare var Plotly: any;


@Component({
  selector: 'plot',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css'],
  providers: [ChartService]
})
export class PlotlyComponent implements OnInit {
  // @ViewChild("plotly") plotly;

  @ViewChild('chart') el: ElementRef;
  // Plotly: any;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.basicChart()
  }

  basicChart() {
  const trace = {
    x : [1,2],
    y : [1,2],
    type:"bar"
  }
    const data = {
      x : [1,2],
      y : [1,2],
      type:"bar"
    };
    Plotly.plot(trace, data)
  }

}
































// declare var Plotly: any;
//
//
//
// @Component({
//   selector: 'plot',
//   templateUrl: './plotly.component.html',
//   styleUrls: ['./plotly.component.css'],
//   providers: [ChartService]
// })
// export class PlotlyComponent implements OnInit {
//   // @ViewChild("plotly") plotly;
//
//   @ViewChild('chart') el: ElementRef;
//   nativeElement: any;
//
//   constructor(private chartService: ChartService) { }
//
//   ngOnInit() {
//     this.basicChart()
//   }
//
//   basicChart() {
//     const element = this.el.nativeElement
//
//
//     const data = [{
//       x: [1, 2, 3, 4, 5],
//       y: [1, 2, 4, 8, 16]
//     }]
//
//     const style = {
//       margin: { t: 0 }
//     }
//
//     console.log(element)
//     console.log(data)
//
//     Plotly.newPlot(element, data, style)
//
//   }





// }























// declare var Plotly: any;
//
// @Component({
//   selector: 'plotlychart',
//    template: `
// <div style="margin-bottom:100px;">
//     <div id="myPlotlyDiv"
//          name="myPlotlyDiv"
//          style="width: 480px; height: 400px;">
//         <!-- Plotly chart will be drawn inside this DIV -->
//     </div>
// </div>
//
// <div class="graph">
//
// <span>hi</span>
// </div>
// `,
//   styleUrls: ['plotly.component.css']
// })
//
// export class PlotlyComponent implements OnInit {
//
//     @Input() data: any;
//     @Input() layout: any;
//     @Input() options: any;
//     @Input() displayRawData: boolean;
//
//     ngOnInit() {
//         console.log("ngOnInit PlotlyComponent");
//         console.log(this.data);
//         console.log(this.layout);
//
//         Plotly.newPlot('myPlotlyDiv', 'test', this.data);
//     }
// }
