import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartType, registerables } from 'chart.js';
import { IChart } from '../../model/chart.model';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit, OnChanges, OnDestroy {
  @Input() title: string = 'Gráfico';
  @Input() data: IChart | undefined;
  @Input() chartType: ChartType = 'bar';

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chartInstance: Chart | undefined;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['data'] &&
      this.data &&
      this.data.labels &&
      this.data.datasets &&
      this.data.datasets.length > 0
    ) {
      if (this.chartInstance) {
        this.updateChart();
      } else {
        setTimeout(() => {
          this.createChart();
        }, 0);
      }
    } else if (changes['chartType'] && this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = undefined;
      setTimeout(() => {
        this.createChart();
      }, 0);
    }
  }

  private createChart(): void {
    if (!this.chartCanvas || !this.data) {
      console.warn(
        'ChartComponent: Canvas ou dados não disponíveis para criar o gráfico.',
        this.chartCanvas,
        this.data,
      );
      return;
    }

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      const options: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
        },

        scales:
          this.chartType === 'line' || this.chartType === 'bar'
            ? {
                y: {
                  beginAtZero: true,
                  ticks: {
                    callback: function (value) {
                      if (Number.isInteger(value)) {
                        return value;
                      }
                      return null;
                    },
                  },
                },
                x: {
                  ticks: {
                    autoSkip: true,
                    maxRotation: 0,
                    minRotation: 0,
                  },
                },
              }
            : {},
      };

      this.chartInstance = new Chart(ctx, {
        type: this.chartType,
        data: this.data as ChartData,
        options: options,
      });
    } else {
      console.error('ChartComponent: Não foi possível obter o contexto 2D do canvas.');
    }
  }

  private updateChart(): void {
    if (this.chartInstance && this.data) {
      this.chartInstance.data.labels = this.data.labels;
      this.chartInstance.data.datasets = this.data.datasets as any;

      this.chartInstance.update();
    }
  }

  ngOnDestroy(): void {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }
}
