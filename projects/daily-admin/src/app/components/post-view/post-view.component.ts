import { Component, OnInit, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IPost, ISideManuArticle } from '../../model/post.model';
import { BodyArticleComponent } from './components/body-article/body-article.component';
import { PostService } from '../../services/post.service';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [CommonModule, RouterLink, BodyArticleComponent, SideMenuComponent],
  providers: [DatePipe],
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostViewComponent implements OnInit {
  private router = inject(Router);
  private actRoute = inject(ActivatedRoute);
  private postService = inject(PostService);
  private notificationService = inject(NotificationService);

  postId: string = '0';

  sideMenuArticle: ISideManuArticle = {
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
    updatedAt: '',
    createdAt: '',
    sources: [],
    link: '',
  };

  ngOnInit() {
    this.postId = this.actRoute.snapshot.paramMap.get('id') || '';
    if (this.postId) {
      this.getPostById(+this.postId);
    }
  }

  getPostById(postId: number) {
    this.postService.getPostById(postId).subscribe({
      next: (response: IPost) => {
        this.article = response;
        this.sidMenuInput(response);
      },
      error: (error) => {
        console.log('GET POST BY ID ERROR', error);
      },
    });
  }

  patchPost(statusFlag: string) {
    this.postService.patchPost(+this.postId, statusFlag).subscribe({
      next: (response: IPost) => {
        const message = this.messageNotification(statusFlag);
        this.notificationService.show('Atualização post', 'success', message);
        this.router.navigate(['/home/posts']);
      },
      error: (error) => {
        console.log('GET POST BY ID ERROR', error);
        this.notificationService.show(
          'Atualização post!',
          'error',
          'Erro ao atualizar post, tente novamente mais tarde!',
        );
      },
    });
  }

  messageNotification(flag: string) {
    return flag === 'approved' ? 'Post aprovado com sucesso!' : 'Post rejeitado com sucesso!';
  }

  sidMenuInput(response: IPost) {
    this.sideMenuArticle = {
      status: response.status,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
      author: response.author,
      category: response.category,
      tags: response.tags ?? [],
      affiliateLinks: response.affiliateLinks,
    };
  }
}
