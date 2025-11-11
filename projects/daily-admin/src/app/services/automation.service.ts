import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IRawMaterial, IRawMaterialId, IRawMaterialUpdateRequest } from '../model/raw_materials';
import { IPagination } from '../model/pagination.model';

@Injectable({
  providedIn: 'root',
})
export class AutomationService {
  constructor(private http: HttpClient) {}

  listAllMaterials(page: number, size: number): Observable<IPagination<IRawMaterial>> {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get<IPagination<IRawMaterial>>(
      `${environment.apiUrl}/automation/materials/list-all?page=${page}&size=${size}`,
      headers,
    );
  }

  getRawMaterialById(rawMaterialId: string): Observable<IRawMaterialId> {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get<IRawMaterialId>(
      `${environment.apiUrl}/automation/raw-materials/${rawMaterialId}`,
      headers,
    );
  }

  updateRawMaterialById(
    rawMaterialId: string,
    rawMaterial: IRawMaterialUpdateRequest,
  ): Observable<IRawMaterialId> {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<IRawMaterialId>(
      `${environment.apiUrl}/automation/raw-materials/${rawMaterialId}`,
      rawMaterial,
      headers,
    );
  }
}
