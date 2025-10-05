import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostListComponent } from '../components/post-list.component';
import { IPost } from '../model/post.model';
import { ICategory } from '../model/category.model';
import { CategoryTagComponent } from '../components/category-tag.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, PostListComponent, CategoryTagComponent],
  template: `
    <div class="container mx-auto px-4 pt-24 pb-12">
      <h1 class="text-3xl font-bold mb-8 text-gray-800">
        {{ categoryName || 'Todas as Categorias' }}
      </h1>

      <!-- Categories Filter -->
      <div class="mb-8">
        <div class="flex flex-wrap">
          @for (cat of categories; track $index) {
            <app-category-tag
              [category]="cat"
              [active]="cat === currentCategory"
              (selected)="filterByCategory(cat)"
            />
          }
        </div>
      </div>

      <!-- Posts List -->
      <app-post-list [posts]="filteredPosts"></app-post-list>
    </div>
  `,
  styles: [],
})
export class CategoryComponent implements OnInit {
  // categories: ICategory[] = CATEGORIES;
  categories: string[] = [];
  allPosts: IPost[] = [];
  filteredPosts: IPost[] = [];
  currentCategory: string = '';
  categoryName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('category');
      this.currentCategory = category || '';
      this.filterPosts();
    });
  }

  filterByCategory(category: string) {
    this.currentCategory = category;
    this.filterPosts();
    // In a real app, this would update the URL
  }

  private filterPosts() {
    if (this.currentCategory) {
      this.filteredPosts = this.allPosts.filter((post) => post.category === this.currentCategory);
      const selectedCategory = this.categories.find((cat) => cat === this.currentCategory);
      this.categoryName = selectedCategory ? selectedCategory : '';
    } else {
      this.filteredPosts = this.allPosts;
      this.categoryName = '';
    }
  }
}
