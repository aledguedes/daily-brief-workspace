import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { IPost } from '../../app/model/post.model';
import { GenericService } from './generic.service';
import { IPagination } from '../model/pagination.model';
import { Observable } from 'rxjs';

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

  getAllPosts(page: number, size: number): Observable<IPagination<IPost>> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }),
    };
    return this.http.get<IPagination<IPost>>(`${environment.apiUrl}/posts`, headers);
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

  getPostById(id: string) {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }),
    };
    return this.http.get<IPost>(`${environment.apiUrl}/posts/${id}`, headers);
  }

  patchPost(id: string, flagStatus: string = 'approve') {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }),
    };
    return this.http.patch<IPost>(`${environment.apiUrl}/posts/${id}/${flagStatus}`, {}, headers);
  }
}
