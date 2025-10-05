import { IPost } from '../../model/post.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getPostPublicById(id: number) {
    const lang = typeof navigator !== 'undefined' ? navigator.language : 'pt-BR';
    return this.http.get<IPost>(`${this.apiUrl}/posts/public/${id}?lang=${lang}`);
  }
}
