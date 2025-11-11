import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPost } from '../../model/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss',
})
export class ArticleCardComponent implements OnInit {
  @Input({ required: true }) article: IPost = {
    id: '',
    title: {
      PT: '',
      EN: '',
      ES: '',
    },
    excerpt: {
      PT: '',
      EN: '',
      ES: '',
    },
    content: {
      PT: '',
      EN: '',
      ES: '',
    },
    image: null,
    author: null,
    tags: [],
    category: {
      id: 0,
      name: '',
      description: '',
      targetAudience: '',
    },
    metaDescription: {
      PT: '',
      EN: '',
      ES: '',
    },
    affiliateLinks: {
      PT: '',
      EN: '',
      ES: '',
    },
    status: {
      id: 0,
      name: '',
      displayName: '',
      bgClass: '',
      textClass: '',
    },
    readTime: null,
    createdAt: '',
    updatedAt: '',
  };

  private router = inject(Router);

  ngOnInit(): void {
    console.log('article', this.article);
  }

  onOpenDetails(postId: string): void {
    this.router.navigate(['/home/posts', postId]);
  }
}
