import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { IPost } from '../../app/model/post.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private auth_token: string = '';

  private http = inject(HttpClient);
  private genericService = inject(GenericService);

  constructor() {
    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      this.auth_token = localStorage.getItem('daily-token') || '';
    }
  }

  getAllPosts(page: number, size: number) {
    return this.genericService.getPaginated<IPost>('posts', page, size);
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

  patchPost(id: number, flagStatus: string = 'approve') {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }),
    };
    return this.http.patch<IPost>(`${environment.apiUrl}/posts/${id}/${flagStatus}`, {}, headers);
  }
}
