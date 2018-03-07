import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService} from '../chart.service'
import * as _ from 'lodash'
import { Plotly } from 'plotly.js/lib/core';

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
    const element = this.el.nativeElement

    const data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16]
    }]

    const style = {
      margin: { t: 0 }
    }

    Plotly.plot( element, data, style )
  }
}
