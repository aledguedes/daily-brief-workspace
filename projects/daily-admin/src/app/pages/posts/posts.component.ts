import { Component, inject, OnInit } from '@angular/core';
import { getStatusClass } from '../../utils/badges.mapper';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { INotification } from '../../model/notification.model';
import { IPost } from '../../model/post.model';
import { IPagination } from '../../model/pagination.model';
import { PostService } from '../../services/post.service';
import { NotificationService } from '../../services/notification.service';
import { ModalPostCreateComponent } from '../../components/modal-post-create/modal-post-create.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ModalPostCreateComponent],
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

  isModalOpen = false;

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

  ngOnInit(): void {
    this.loadMockData();
  }

  loadMockData(): void {
    this.postService.getAllPosts(this.pagination.page, this.pagination.size).subscribe({
      next: (response: IPagination<IPost>) => {
        this.posts = response.content;
        this.totalPages = response.totalPages;
        // console.log('GET ALL POSTS RESPONSE', response);
      },
      error: (err) => {
        console.log('GET ALL POSTS ERROR', err);
      },
    });
  }

  onStatusFilterChange() {
    this.currentPage = 1;
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

  // Make the imported function available to the template
  public getStatusClass = getStatusClass;

  patchPost(postId: number, statusFlag: string = 'approve') {
    this.postService.patchPost(+postId, statusFlag).subscribe({
      next: (response: IPost) => {
        const idx = this.posts.findIndex((p) => p.id === postId);
        if (idx !== -1) {
          this.posts[idx] = response;
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

  closeModal(event: boolean) {
    this.isModalOpen = false;
  }
}
