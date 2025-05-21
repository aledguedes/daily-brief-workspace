import { Component, signal, computed, WritableSignal } from '@angular/core';
import { IPost } from '../../model/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-view.component.html',
  styleUrl: './post-view.component.scss',
})
export class PostViewComponent {
  lang: WritableSignal<'PT' | 'EN' | 'ES'> = signal('PT');
  // Ajuste aqui: tipar explicitamente o array 'idiomas'
  idiomas: ('PT' | 'EN' | 'ES')[] = ['PT', 'EN', 'ES'];

  post: IPost = {
    id: 1,
    title: {
      PT: 'Título do Artigo em Português',
      EN: 'Article Title in English',
      ES: 'Título del Artículo en Español',
    },
    excerpt: {
      PT: 'Este é um breve resumo do artigo em português.',
      EN: 'This is a short excerpt of the article in English.',
      ES: 'Este es un breve resumen del artículo en español.',
    },
    content: {
      PT: 'Primeiro parágrafo do conteúdo em português.\nSegundo parágrafo do conteúdo em português.',
      EN: 'First paragraph of the content in English.\nSecond paragraph of the content in English.',
      ES: 'Primer párrafo del contenido en español.\nSegundo párrafo del contenido en español.',
    },
    image: 'https://via.placeholder.com/800x400',
    author: 'Nome do Autor',
    tags: ['Angular', 'Signals', 'Frontend'],
    category: 'Tecnologia',
    metaDescription: {
      PT: 'Meta descrição em português.',
      EN: 'Meta description in English.',
      ES: 'Meta descripción en español.',
    },
    affiliateLinks: {
      PT: 'links afiliados PT',
      EN: 'affiliate links EN',
      ES: 'enlaces de afiliados ES',
    },
    status: 'PENDING',
    date: '2024-07-25',
    readTime: '5 min',
  };

  contentParagraphs = computed(() => {
    const currentLang = this.lang();
    const currentContent = this.post.content[currentLang];
    if (currentContent) {
      return currentContent.split('\n');
    }
    return [];
  });

  onView() {
    console.log('Visualizar post:', this.post.id);
  }
  onEdit() {
    console.log('Editar post:', this.post.id);
  }
}
