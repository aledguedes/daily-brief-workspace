import { inject, Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { ILog } from '../model/log.model';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private auth_token: string = localStorage.getItem('daily-token') || '';

  private genericService = inject(GenericService);

  getAllLogs(page: number, size: number) {
    return this.genericService.getPaginated<ILog>('logs', page, size);
  }
}
