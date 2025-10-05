import { Component, Input } from '@angular/core';
import { IStatisticsCards } from '../../model/statisticsCard.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics-card',
  imports: [CommonModule],
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.scss',
})
export class StatisticsCardComponent {
  @Input() statisticsCard: IStatisticsCards = {
    title: '',
    value: '',
    status: '',
    icon: '',
    color: '',
    bgColor: '',
    isPositive: true,
  };
}
