import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IHomePage } from '../../model/homepage.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getPostHomePage(limit: number) {
    // Captura a linguagem do navegador (ex.: 'pt-BR')
    const lang = typeof navigator !== 'undefined' ? navigator.language : 'pt-BR';
    return this.http.get<IHomePage>(`${this.apiUrl}/posts/homepage?limit=${limit}&lang=${lang}`);
  }
}
