import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IPost } from '../model/post.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-12 md:py-12 lg:pt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-[var(--white-color)] dark:bg-[var(--white-color)] rounded-3xl overflow-hidden"
        >
          <div class="md:flex">
            <div class="md:w-1/2 relative">
              <img
                [src]="post.image"
                [alt]="post.title"
                class="w-full h-64 md:h-full object-cover"
              />
              <div class="absolute top-4 left-4">
                <span
                  class="bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  ✨ Artigo em Destaque
                </span>
              </div>
            </div>
            <div class="md:w-1/2 p-8 lg:p-12">
              <div class="flex items-center mb-6">
                <span class="text-gray-500 text-sm">{{ post.date | date }}</span>
                <span class="mx-2 text-gray-300">•</span>
                <span class="text-[var(--accent)] dark:text-[var(--accent)] text-sm font-bold"
                  >{{ post.readTime }} de leitura</span
                >
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                {{ post.title }}
              </h2>
              <p class="text-gray-600 mb-8 text-lg leading-relaxed">
                {{ post.excerpt }}
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <img
                    [src]="authorImage"
                    [alt]="post.author"
                    class="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  />
                  <div class="ml-3">
                    <span class="text-sm font-medium text-gray-900">{{ post.author }}</span>
                    <p class="text-xs text-gray-500">
                      {{ post.author || 'Senior Developer' }}
                    </p>
                  </div>
                </div>
                <a
                  [routerLink]="['/post', post.id]"
                  class="group flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Ler artigo completo
                  <svg
                    class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class HeroComponent {
  authorImage: string =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face';
  @Input() post: IPost = {
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
}
