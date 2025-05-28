import { Component, Input } from '@angular/core';
import { Post } from '../../data/modelMock';
import { CommonModule } from '@angular/common';
import { IRecentPost } from '../../model/dashboard.model';

@Component({
  selector: 'app-post-card-dash',
  imports: [CommonModule],
  templateUrl: './post-card-dash.component.html',
  styleUrl: './post-card-dash.component.scss',
})
export class PostCardDashComponent {
  @Input() posts: IRecentPost[] = [];
  @Input() selectedLanguage: 'pt-BR' | 'en' | 'es' = 'pt-BR';
}
