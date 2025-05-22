import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { IPost } from '../model/post.model';
import { IPagination } from '../../models/pagination.model';
import { RouterLink } from '@angular/router';
import { INotification } from '../model/notification.model';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  private postService = inject(PostService);

  notification: INotification = {
    message: 'Our privacy policy has changed',
    type: 'info',
    show: true,
    title: 'Make sure you know how these changes affect you.',
  };

  posts: IPost[] = [];
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
    updated_at: '',
  };

  ngOnInit(): void {
    this.loadMockData();
  }

  loadMockData(): void {
    this.postService.getAllPosts().subscribe({
      next: (response: IPagination<IPost>) => {
        this.posts = response.content;
        console.log('GET ALL POSTS RESPONSE', response);
      },
      error: (err) => {
        console.log('GET ALL POSTS ERROR', err);
      },
    });
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

  approvePost(postId: number): void {
    const post = this.posts.find((p) => p.id === postId);
    if (post) {
      post.status = 'APPROVED';
      console.log(`Post ${postId} approved`);
    }
  }

  rejectPost(postId: number): void {
    const post = this.posts.find((p) => p.id === postId);
    if (post) {
      post.status = 'REJECTED';
      console.log(`Post ${postId} rejected`);
    }
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
      updated_at: '',
    };
    console.log('Post created');
  }
}
