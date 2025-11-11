import { ArticleCardComponent } from './../../../../components/article-card/article-card.component';
import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../../../../services/post.service';
import { IPagination } from '../../../../model/pagination.model';
import { IPost } from '../../../../model/post.model';

@Component({
  selector: 'app-post-list',
  imports: [ArticleCardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  private postService = inject(PostService);

  posts: IPost[] = [];
  page: number = 0;
  size: number = 10;

  ngOnInit(): void {
    this.getListAllPosts();
  }

  getListAllPosts() {
    this.postService.getAllPosts(this.page, this.size).subscribe({
      next: (response: IPagination<IPost>) => {
        this.posts = response.content;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      },
    });
  }
}
