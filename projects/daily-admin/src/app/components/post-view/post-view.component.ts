import { Component, signal, computed, OnInit, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IPost } from '../../model/post.model';
import { PostService } from '../../../services/post.service';
import { BodyArticleComponent } from './components/body-article/body-article.component';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [CommonModule, BodyArticleComponent],
  providers: [DatePipe],
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostViewComponent implements OnInit {
  private actRoute = inject(ActivatedRoute);
  private postService = inject(PostService);

  article: IPost = {
    id: 0,
    title: { PT: '', EN: '', ES: '' },
    excerpt: { PT: '', EN: '', ES: '' },
    content: { PT: '', EN: '', ES: '' },
    image: '',
    author: '',
    tags: [],
    category: '',
    metaDescription: { PT: '', EN: '', ES: '' },
    affiliateLinks: { PT: '', EN: '', ES: '' },
    status: 'PENDING',
    date: '',
    readTime: '',
    updated_at: '',
  };

  ngOnInit() {
    const postId = this.actRoute.snapshot.paramMap.get('id') || '';
    if (postId) {
      this.getPostById(+postId);
    }
  }

  getPostById(postId: number) {
    this.postService.getPostById(postId).subscribe({
      next: (response: IPost) => {
        this.article = response;
      },
      error: (error) => {
        console.log('GET POST BY ID ERROR', error);
      },
    });
  }
}
