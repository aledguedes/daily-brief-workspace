import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IChart } from '../../model/chart.model';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnChanges {
  @Input() title: string = '';
  @Input() data: any;
  @Input() chartType: ChartType = 'line'; // valor padrão

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
}
