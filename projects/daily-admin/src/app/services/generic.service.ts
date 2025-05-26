import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination } from '../../app/models/pagination.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  private auth_token = 'seu_token_aqui'; // Ou injete de outro serviço

  constructor(private http: HttpClient) {}

  getPaginated<T>(flag: string): Observable<IPagination<T>> {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`,
      }),
    };

    return this.http.get<IPagination<T>>(`${environment.apiUrl}/${flag}`, headers);
  }
}
