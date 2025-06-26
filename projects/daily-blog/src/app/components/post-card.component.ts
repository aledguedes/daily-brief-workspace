import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IPost } from '../model/post.model';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      class="group bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20"
    >
      <div class="relative">
        <img
          [src]="post.image"
          [alt]="post.title"
          class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div class="absolute top-4 left-4">
          <span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">{{
            post.category
          }}</span>
        </div>
      </div>
      <div class="p-6">
        <div class="flex items-center mb-3 text-sm text-gray-500">
          <span>{{ post.date | date }}</span>
          <span class="mx-2">•</span>
          <span>{{ post.readTime }}</span>
        </div>
        <h3
          class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-500 transition-colors cursor-pointer leading-tight"
        >
          {{ post.title }}
        </h3>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
          {{ post.excerpt }}
        </p>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img [src]="post.author" [alt]="post.author" class="w-6 h-6 rounded-full" />
            <span class="text-xs text-gray-600 ml-2">{{ post.author }}</span>
          </div>
          <a
            [routerLink]="['/post', post.id]"
            class="text-primary hover:text-primary/80 text-sm font-medium"
          >
            Ler mais →
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PostCardComponent {
  @Input() post: IPost = {
    id: 0,
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: '',
    date: '',
    readTime: '',
    category: '',
    tags: [],
    metaDescription: '',
    affiliateLinks: '',
    status: 'PENDING',
    updatedAt: '',
    createdAt: '',
  };
}
