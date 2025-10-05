import { Component, Input } from '@angular/core';
import { IActionButton } from '../../model/quickActions.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quick-actions',
  imports: [CommonModule, RouterModule],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.scss',
})
export class QuickActionsComponent {
  @Input() action: IActionButton = {
    id: '',
    icon: '',
    color: '',
    background: '',
    hoverBackground: '',
    label: '',
    router: '',
  };
}
