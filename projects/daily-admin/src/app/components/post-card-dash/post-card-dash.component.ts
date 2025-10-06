import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRecentPost } from '../../model/dashboard.model';
import { getStatusClass } from '../../utils/badges.mapper';
import { RouterLink } from '@angular/router';
import { IPost } from '../../model/post.model';

@Component({
  selector: 'app-post-card-dash',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-card-dash.component.html',
  styleUrl: './post-card-dash.component.scss',
})
export class PostCardDashComponent {
  @Input() post: IPost[] = [];
  @Input() selectedLanguage: 'PT' | 'EN' | 'ES' = 'PT';
  getStatusClass = getStatusClass;
  
  getImageClass(image: any): string {
    return image || 'bg-slate-200 flex items-center justify-center';
  }
}
