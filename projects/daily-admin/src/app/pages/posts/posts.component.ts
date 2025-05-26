import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { INotification } from '../../model/notification.model';
import { IPost } from '../../model/post.model';
import { IPagination } from '../../models/pagination.model';
import { PostService } from '../../services/post.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  private postService = inject(PostService);
  private notificationService = inject(NotificationService);

  notification: INotification = {
    message: 'Our privacy policy has changed',
    type: 'info',
    show: true,
    title: 'Make sure you know how these changes affect you.',
  };

  posts: IPost[] = [];
  paginatedPosts: IPost[] = [];
  statusFilter: string = '';

  pageSize: number = 10;
  totalPages: number = 1;
  currentPage: number = 1;

  pagination: {
    page: number;
    size: number;
  } = {
    page: 0,
    size: 5,
  };

  currentLanguage: 'PT' | 'EN' | 'ES' = 'PT';

  newPost: IPost = {
    id: 0,
    title: { PT: '', EN: '', ES: '' },
    excerpt: { PT: '', EN: '', ES: '' },
    content: { PT: '', EN: '', ES: '' },
    image: '',
    author: 'Admin',
    tags: [],
    category: '',
    metaDescription: { PT: '', EN: '', ES: '' },
    affiliateLinks: { PT: '', EN: '', ES: '' },
    status: 'PENDING',
    date: '',
    readTime: '',
    updatedAt: '',
    createdAt: '',
  };

  ngOnInit(): void {
    this.loadMockData();
  }

  loadMockData(): void {
    this.postService.getAllPosts(this.pagination.page, this.pagination.size).subscribe({
      next: (response: IPagination<IPost>) => {
        this.posts = response.content;
        this.totalPages = response.totalPages;
        console.log('GET ALL POSTS RESPONSE', response);
      },
      error: (err) => {
        console.log('GET ALL POSTS ERROR', err);
      },
    });
  }

  onStatusFilterChange() {
    this.currentPage = 1;
    this.applyFiltersAndPagination();
  }

  applyFiltersAndPagination() {
    let filtered = this.statusFilter
      ? this.posts.filter((post) => post.status === this.statusFilter)
      : [...this.posts];
    // this.totalPages = Math.max(1, Math.ceil(filtered.length / this.pageSize));
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedPosts = filtered.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pagination.page--;
      this.loadMockData();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pagination.page++;
      this.loadMockData();
    }
  }

  getStatusClass(status: 'PENDING' | 'APPROVED' | 'REJECTED'): string {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'APPROVED':
        return 'bg-green-100 text-green-800';
      case 'REJECTED':
        return 'bg-red-100 text-red-800';
      default:
        return '';
    }
  }

  patchPost(postId: number, statusFlag: string = 'approve') {
    this.postService.patchPost(+postId, statusFlag).subscribe({
      next: (response: IPost) => {
        // Atualiza o post na lista
        const idx = this.posts.findIndex((p) => p.id === postId);
        if (idx !== -1) {
          this.posts[idx] = response;
          this.applyFiltersAndPagination();
        }
      },
      error: (err) => {
        console.log('PATCH POST ERROR', err);
      },
    });
  }

  messageNotification(flag: string) {
    return flag === 'approved' ? 'Post aprovado com sucesso!' : 'Post rejeitado com sucesso!';
  }

  createPost(): void {
    this.newPost.id = this.posts.length + 1;
    this.posts.push(this.newPost);
    this.newPost = {
      id: 0,
      title: { PT: '', EN: '', ES: '' },
      excerpt: { PT: '', EN: '', ES: '' },
      content: { PT: '', EN: '', ES: '' },
      image: '',
      author: 'Admin',
      tags: [],
      category: '',
      metaDescription: { PT: '', EN: '', ES: '' },
      affiliateLinks: { PT: '', EN: '', ES: '' },
      status: 'PENDING',
      date: '',
      readTime: '',
      updatedAt: '',
      createdAt: '',
    };
    console.log('Post created');
  }
}
