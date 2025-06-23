import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { IPost } from '../model/post.model';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="container mx-auto px-4 pt-24 pb-12">
      <article *ngIf="post" class="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div class="h-96 w-full overflow-hidden">
          <img [src]="post.image" [alt]="post.title" class="w-full h-full object-cover" />
        </div>

        <div class="p-6 md:p-8">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {{ post.title }}
          </h1>

          <div class="flex flex-wrap items-center text-gray-500 mb-6">
            <span class="mr-4">Por {{ post.author }}</span>
            <span class="mr-4">{{ post.date }}</span>
            <span class="mr-4">{{ post.readTime }} min de leitura</span>
            <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{{
              post.category
            }}</span>
          </div>

          <!-- <div class="prose prose-lg max-w-none" [innerHTML]="post.content"></div> -->

          <div class="prose max-w-none prose-sm sm:prose-base text-justify dark:prose-invert">
            <div [innerHTML]="post.content"></div>
          </div>
        </div>
      </article>

      <div *ngIf="!post" class="text-center py-12">
        <p class="text-gray-500">Post não encontrado.</p>
      </div>
    </div>
  `,
})
export class PostDetailComponent implements OnInit {
  post: IPost | undefined = {
    id: 0,
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: '',
    tags: [],
    category: '',
    metaDescription: '',
    affiliateLinks: '',
    status: 'PENDING',
    date: '',
    readTime: '',
    updatedAt: '',
    createdAt: '',
  };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.getPublicPostId(id);
    });
  }

  getPublicPostId(id: number) {
    this.postService.getPostPublicById(id).subscribe({
      next: (post) => {
        this.post = post;
      },
      error: (error) => {
        console.error('Erro ao buscar o post:', error);
      },
    });
  }
}
