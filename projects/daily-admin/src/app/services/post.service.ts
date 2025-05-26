import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IPost } from '../../app/model/post.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private auth_token: string = localStorage.getItem('daily-token') || '';

  private http = inject(HttpClient);
  private genericService = inject(GenericService);

  getAllPosts() {
    return this.genericService.getPaginated<IPost>('posts');
  }

  createPost(form: any) {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }),
    };
    return this.http.post<IPost>(`${environment.apiUrl}/posts`, JSON.stringify(form), headers);
  }

  getPostById(id: number) {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }),
    };
    return this.http.get<IPost>(`${environment.apiUrl}/posts/${id}`, headers);
  }
}
