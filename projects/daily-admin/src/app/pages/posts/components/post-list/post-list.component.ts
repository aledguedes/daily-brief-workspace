import { Component, inject, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { recentPosts } from '../../../../data/mockData';
import { ArticleCardComponent } from '../../../../components/article-card/article-card.component';
import { IPost } from '../../../../model/post.model';
import { SidePanelComponent } from '../../../../components/side-panel/side-panel.component';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule, ArticleCardComponent, SidePanelComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  private renderer = inject(Renderer2);
  selectedArticle: IPost = {
    id: 0,
    title: {
      PT: '',
      EN: '',
      ES: '',
    },
    excerpt: {
      PT: '',
      EN: '',
      ES: '',
    },
    content: {
      PT: '',
      EN: '',
      ES: '',
    },
    image: '',
    author: '',
    tags: [],
    category: '',
    metaDescription: {
      PT: '',
      EN: '',
      ES: '',
    },
    affiliateLinks: {
      PT: '',
      EN: '',
      ES: '',
    },
    status: 'PENDING',
    date: '',
    readTime: '',
    updatedAt: '',
    createdAt: '',
    sources: [],
    link: '',
  };
  panelOpen: boolean = false;
  recentPosts: IPost[] = recentPosts;

  filters = [
    { id: 'all', label: 'Todos', active: true },
    { id: 'completed', label: 'Concluídos', active: false },
    { id: 'progress', label: 'Em Progresso', active: false },
  ];

  setActiveFilter(filterId: string): void {
    this.filters = this.filters.map((filter) => ({
      ...filter,
      active: filter.id === filterId,
    }));
  }

  openSidePanel(articleId: number): void {
    const articleData = recentPosts.filter((article) => article.id === articleId)[0];
    if (articleData) {
      this.selectedArticle = articleData;
      this.panelOpen = true;
      // Em Angular, podemos controlar o overflow do body via DOM ou Renderer2,
      // mas para simplicidade neste passo, o CSS pode ajudar.
      this.renderer.addClass(document.body, 'no-scroll');
      console.log('Added no-scroll to body:', document.body.classList.contains('no-scroll')); // Log para depuração
    }
  }

  // Função placeholder para fechar o painel lateral
  closeSidePanel(): void {
    this.panelOpen = false;
    this.selectedArticle = {
      id: 0,
      title: {
        PT: '',
        EN: '',
        ES: '',
      },
      excerpt: {
        PT: '',
        EN: '',
        ES: '',
      },
      content: {
        PT: '',
        EN: '',
        ES: '',
      },
      image: '',
      author: '',
      tags: [],
      category: '',
      metaDescription: {
        PT: '',
        EN: '',
        ES: '',
      },
      affiliateLinks: {
        PT: '',
        EN: '',
        ES: '',
      },
      status: 'PENDING',
      date: '',
      readTime: '',
      updatedAt: '',
      createdAt: '',
      sources: [],
      link: '',
    };
    // Remove a classe 'no-scroll' do <body>
    this.renderer.removeClass(document.body, 'no-scroll');
    console.log('Removed no-scroll from body:', !document.body.classList.contains('no-scroll')); // Log para depuração
  }
}
