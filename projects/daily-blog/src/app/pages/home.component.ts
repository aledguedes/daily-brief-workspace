import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero.component';
import { PostListComponent } from '../components/post-list.component';
import { IPost } from '../model/post.model';
import { NewsletterComponent } from '../components/newsletter.component';
import { HomePageService } from '../services/homepage/homepage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, PostListComponent, NewsletterComponent],
  template: `
    <div class="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <main class="flex-1">
        <app-hero [post]="featuredPost"></app-hero>
        <app-post-list [posts]="recentPosts" [title]="'Posts Recentes'"></app-post-list>
        <app-newsletter></app-newsletter>
      </main>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  featuredPost: IPost = {
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
  aiPosts: IPost[] = [];
  techPosts: IPost[] = [];
  recentPosts: IPost[] = [];

  private homePageService = inject(HomePageService);

  ngOnInit() {
    // this.featuredPost = POSTS[0];
    // this.recentPosts = POSTS.slice(0, 3);
    // this.techPosts = POSTS.filter((post) => post.category.name === 'Tecnologia');
    // this.aiPosts = POSTS.filter((post) => post.category.name.includes('IA'));
    this.getPostByHomePage(5);
  }

  getPostByHomePage(limit: number = 5) {
    this.homePageService.getPostHomePage(limit).subscribe({
      next: (res: any) => {
        this.featuredPost = res.latestPost;
        this.recentPosts = res.recentPosts;
        // this.techPosts = res.techPosts;
        // this.aiPosts = res.aiPosts;

        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
