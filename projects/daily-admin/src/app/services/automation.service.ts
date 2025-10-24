import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IRawMaterial, IRawMaterialId } from '../model/raw_materials';

@Injectable({
  providedIn: 'root',
})
export class AutomationService {
  constructor(private http: HttpClient) {}

  listAllMaterials(): Observable<IRawMaterial[]> {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get<IRawMaterial[]>(`${environment.apiUrlPy}/list-all-materials`, headers);
  }

  getRawMaterialById(id: string): Observable<IRawMaterialId> {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.get<IRawMaterialId>(`${environment.apiUrlPy}/raw-material/${id}`, headers);
  }
}
