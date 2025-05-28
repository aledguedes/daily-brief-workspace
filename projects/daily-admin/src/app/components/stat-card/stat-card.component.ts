import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IDashboardCard } from '../../model/dashboard.model';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent {
  @Input() stat: IDashboardCard = {
    title: '',
    value: '',
    icon: '',
    iconBgColor: '',
    iconColor: '',
  };
}
