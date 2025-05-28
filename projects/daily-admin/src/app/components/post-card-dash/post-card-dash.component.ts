import { Component, Input } from '@angular/core';
import { Post } from '../../data/modelMock';
import { CommonModule } from '@angular/common';
import { IRecentPost } from '../../model/dashboard.model';
import { RouterLink } from '@angular/router';
import { getStatusClass } from '../../utils/badges.mapper';

@Component({
  selector: 'app-post-card-dash',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-card-dash.component.html',
  styleUrl: './post-card-dash.component.scss',
})
export class PostCardDashComponent {
  @Input() posts: IRecentPost[] = [];
  @Input() selectedLanguage: 'PT' | 'EN' | 'ES' = 'PT';
  getStatusClass = getStatusClass;
}
