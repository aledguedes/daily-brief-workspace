import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  signal,
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IPost } from '../../../../model/post.model';

@Component({
  selector: 'app-body-article',
  templateUrl: './body-article.component.html',
  styleUrls: ['./body-article.component.scss'],
})
export class BodyArticleComponent implements OnChanges {
  @Input() article: IPost = {
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
    updated_at: '',
  };

  currentLang = signal<'PT' | 'EN' | 'ES'>('PT');
  safeContent!: SafeHtml;
  @Output() setLanguage = new EventEmitter<'PT' | 'EN' | 'ES'>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['article'] && changes['article'].currentValue) {
      const article = changes['article'].currentValue as IPost;
      this.safeContent = article.content[this.currentLang()];
    }
  }

  onSetLanguage(lang: 'PT' | 'EN' | 'ES') {
    this.currentLang.set(lang);
  }
}
