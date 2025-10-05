import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from '../../services/log.service';
import { ILog } from '../../model/log.model';
import { IPagination } from '../../model/pagination.model';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {
  private logService = inject(LogService);

  logs = signal<ILog[]>([]);

  ngOnInit(): void {
    this.getAllLogs();
  }

  getAllLogs() {
    this.logService.getAllLogs(0, 10).subscribe({
      next: (response: IPagination<ILog>) => {
        const enrichedLogs = response.content.map((log: ILog) => ({
          ...log,
          expanded: log.expanded ?? false,
          statusLabel: this.getStatusLabel(log),
        }));
        this.logs.set(enrichedLogs);
      },
      error: (err: any) => {
        console.error('GET LOGS ERROR: ', err);
      },
    });
  }

  toggleLog(index: number) {
    const updatedLogs = [...this.logs()];
    updatedLogs[index].expanded = !updatedLogs[index].expanded;
    this.logs.set(updatedLogs);
  }

  getStatusLabel(log: ILog): 'INFO' | 'SUCESSO' | 'ERRO' {
    const summary = log.details?.summary?.toUpperCase() || '';
    if (summary.includes('SUCESSO')) return 'SUCESSO';
    if (summary.includes('ERRO') || summary.includes('FALHA')) return 'ERRO';
    return 'INFO';
  }

  stats = computed(() => {
    const allLogs = this.logs();
    const totalCreated = allLogs.reduce((sum, log) => sum + (log.details.metrics.created || 0), 0);
    const totalFailed = allLogs.reduce((sum, log) => sum + (log.details.metrics.failed || 0), 0);
    const totalRetries = allLogs.reduce((sum, log) => sum + (log.details.metrics.retries || 0), 0);
    const totalDuration = allLogs.reduce(
      (sum, log) => sum + (log.details.duration_seconds || 0),
      0,
    );

    return [
      {
        icon: '✓',
        bgColor: 'bg-green-100',
        iconColor: 'text-green-600',
        label: 'Criados',
        value: totalCreated,
      },
      {
        icon: '✗',
        bgColor: 'bg-red-100',
        iconColor: 'text-red-600',
        label: 'Falhas',
        value: totalFailed,
      },
      {
        icon: '↻',
        bgColor: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
        label: 'Tentativas',
        value: totalRetries,
      },
      {
        icon: '⏱',
        bgColor: 'bg-blue-100',
        iconColor: 'text-blue-600',
        label: 'Duração',
        value: `${totalDuration.toFixed(2)}s`,
      },
    ];
  });
}
