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
    status: '',
    createdAt: '',
    updatedAt: '',
    author: '',
    category: '',
    tags: [],
    affiliateLinks: {
      PT: '',
      EN: '',
      ES: '',
    },
  };
}
