import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPost } from '../model/post.model';
import { PostCardComponent } from './post-card.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  template: `
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              {{ title }}
            </h2>
            <p class="text-gray-600 font-medium">Conteúdo sempre atualizado para desenvolvedores</p>
          </div>
          <div class="flex flex-wrap gap-2 mt-4 lg:mt-0">
            @for (category of categoryButtons; track $index) {
              <button
                class="px-5 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 border {{
                  category.active
                    ? 'bg-blue-100 text-blue-500 border-blue-100'
                    : 'text-gray-600 bg-gray-50 border-gray-200'
                }} hover:bg-blue-500 hover:text-white hover:shadow-md"
                (click)="setActiveCategory($index)"
              >
                {{ category.name }}
              </button>
            }
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (post of posts; track post.id) {
            <app-post-card [post]="post"></app-post-card>
          }
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button
            class="group px-8 py-3 bg-white text-blue-400 border border-blue-100 rounded-xl hover:bg-blue-400  hover:text-white transition-all duration-300 font-medium text-sm tracking-wide"
          >
            <span>Carregar Mais Artigos</span>
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class PostListComponent {
  @Input() posts: IPost[] = [];
  @Input() title: string = '';
  categoryButtons: { name: string; active: boolean }[] = [
    {
      name: 'Todos',
      active: true,
    },
    {
      name: 'IA & ML',
      active: false,
    },
    {
      name: 'JavaScript',
      active: false,
    },
    {
      name: 'Python',
      active: false,
    },
    {
      name: 'DevOps',
      active: false,
    },
  ];

  setActiveCategory(index: number): void {
    this.categoryButtons.forEach((button, i) => {
      button.active = i === index;
    });
  }
}
