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
  @Input() data: IChart | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data']?.currentValue) {
    }
  }
}
