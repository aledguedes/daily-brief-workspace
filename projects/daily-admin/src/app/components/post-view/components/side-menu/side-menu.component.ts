import { Component, Input } from '@angular/core';
import { ISideManuArticle } from '../../../../model/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  @Input() data: ISideManuArticle = {
    status: {
      id: 0,
      name: '',
      displayName: '',
      bgClass: '',
      textClass: '',
    },
    createdAt: '',
    updatedAt: '',
    author: '',
    category: {
      id: 0,
      name: '',
      description: '',
      targetAudience: '',
    },
    tags: [],
    affiliateLinks: {
      PT: '',
      EN: '',
      ES: '',
    },
  };
}
