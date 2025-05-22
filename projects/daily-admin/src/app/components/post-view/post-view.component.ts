import { Component, signal, computed, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IPost } from '../../model/post.model';
import { PostService } from '../../../services/post.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'],
})
export class PostViewComponent implements OnInit {
  private actRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private datePipe = inject(DatePipe);
  private postService = inject(PostService);
  private sanitizer = inject(DomSanitizer);

  article = signal<IPost>({
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
  });

  currentLang = signal<'PT' | 'EN' | 'ES'>('PT');

  safeContent = computed<SafeHtml>(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.article().content[this.currentLang()]),
  );

  ngOnInit() {
    const postId = this.actRoute.snapshot.paramMap.get('id') || '';
    if (postId) {
      this.getPostById(+postId);
    }
  }

  getPostById(postId: number) {
    this.postService.getPostById(postId).subscribe({
      next: (response: IPost) => {
        console.log('GET POST BY ID ERROR', response);
        this.article.set(response);
      },
      error: (error) => {
        console.log('GET POST BY ID ERROR', error);
      },
    });
  }

  setLanguage(lang: 'PT' | 'EN' | 'ES') {
    this.currentLang.set(lang);
  }
}
