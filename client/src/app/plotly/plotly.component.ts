import { Component, EventEmitter, Input, Output, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { TrendsComponent } from '../trends/trends.component';
import Plotly from 'plotly.js/lib/core';
import { ChartService} from '../chart.service';
import * as _ from 'lodash';

declare var Plotly: any;


@Component({
  selector: 'cool-chart',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css'],
  providers: [ChartService]
})
export class PlotlyComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getData('rankings')
        // .take(1)
        .subscribe(data => {
          Plotly.purge(this.el.nativeElement)
          this.ternaryChart(data)
    })
  }




  ternaryChart(data) {
    const element = this.el.nativeElement
    const formattedData = [{
    type: 'scatterternary',
      mode: 'markers',
      a: data.map(d => d.analyst ),
      b: data.map(d => d.designer),
      c: data.map(d => d.developer),
      text: data.map(d => d.label),
      marker: {
          symbol: 100,
          color: '#DB7365',
          size: 14,
          line: { width: 2 }
      },
    }]
    const style = {
    ternary: {
      sum: 100,
      aaxis: this.makeAxis('Analyst', 0),
      baxis: this.makeAxis('Developer', 45),
      caxis: this.makeAxis('Designer', -45),
      bgcolor: '#fff1e0'
    }
  }

    console.log(Plotly);

    Plotly.plot(element, formattedData, style);

  }
  private makeAxis(title, tickangle) {
      return {
        title: title,
        titlefont: { size: 20 },
        tickangle: tickangle,
        tickfont: { size: 15 },
        tickcolor: 'rgba(0,0,0,0)',
        ticklen: 5,
        showline: true,
        showgrid: true
      };

}
}























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
