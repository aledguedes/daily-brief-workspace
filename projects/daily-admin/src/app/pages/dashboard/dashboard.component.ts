import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import {
  IDashboardCard,
  IDashboarResponse,
  ILogDisplayItem,
  IRecentPost,
} from '../../model/dashboard.model';
import { IChart } from '../../model/chart.model';
import { mapBackendToDashboardCards } from '../../utils/dashboard.mapper';
import { CommonModule } from '@angular/common';
import { LogItemComponent } from '../../components/log-item/log-item.component';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';
import { PostCardDashComponent } from '../../components/post-card-dash/post-card-dash.component';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    RouterModule,
    LogItemComponent,
    StatCardComponent,
    PostCardDashComponent,
    ChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private dashService = inject(DashboardService);
  private router = inject(Router);

  selectedLanguage = 'pt-BR';
  blogDashboardCards: IDashboardCard[] = [];

  // Variáveis para dados dos gráficos (nomes ajustados para o HTML)
  postsByStatusChart: IChart | undefined;
  viewsOverTimeChart: IChart | undefined;
  dailyAffiliateClicksChart: IChart | undefined;
  trafficSourcesChart: IChart | undefined;

  // Variáveis para Posts Recentes e Logs (populadas do backend)
  recentPosts: IRecentPost[] = [];
  recentLogs: ILogDisplayItem[] = [];

  ngOnInit(): void {
    this.dataDashboard();
  }

  dataDashboard() {
    this.dashService.getAllData().subscribe({
      next: (response: IDashboarResponse) => {
        console.log('DASHBOARD DATA RESPONSE', response);

        this.blogDashboardCards = mapBackendToDashboardCards(response.analytics);
        this.populateIChart(response.analytics);
        this.recentPosts = response.recentPosts;
        // this.recentLogs = response.recentLogs;
      },
      error: (err) => {
        console.log('DASHBOARD DATA ERROR', err);
      },
    });
  }

  private populateIChart(analytics: any): void {
    // Usar 'any' temporariamente se a interface IAnalytics não estiver 100% pronta
    // Gráfico de Posts por Status
    this.postsByStatusChart = {
      labels: ['Aprovado', 'Pendente', 'Rejeitado'],
      datasets: [
        {
          label: 'Posts',
          data: [
            analytics.totalPostsApproved,
            analytics.totalPostsPending,
            analytics.totalPostsRejected,
          ],
          backgroundColor: ['#22c55e', '#eab308', '#ef4444'],
        },
      ],
    };

    // Gráfico de Visualizações Diárias
    this.viewsOverTimeChart = {
      // Nome da variável ajustado
      labels: analytics.dailyPageviews.map((dp: { date: string }) => dp.date),
      datasets: [
        {
          label: 'Visualizações',
          data: analytics.dailyPageviews.map((dp: { value: number }) => dp.value),
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          fill: true,
          tension: 0.4,
        },
      ],
    };

    // Gráfico de Cliques em Afiliados Diários (Novo)
    this.dailyAffiliateClicksChart = {
      // Nova variável
      labels: analytics.dailyAffiliateClicks.map((dc: { date: string }) => dc.date),
      datasets: [
        {
          label: 'Cliques em Afiliados',
          data: analytics.dailyAffiliateClicks.map((dc: { value: number }) => dc.value),
          borderColor: '#f59e42',
          backgroundColor: 'rgba(245, 158, 66, 0.2)',
          fill: true,
          tension: 0.4,
        },
      ],
    };

    // Gráfico de Fontes de Tráfego
    this.trafficSourcesChart = {
      // Nome da variável ajustado
      labels: analytics.trafficSources.map((ts: { source: string }) => ts.source),
      datasets: [
        {
          label: 'Fontes de Tráfego',
          data: analytics.trafficSources.map((ts: { percentage: number }) => ts.percentage),
          backgroundColor: ['#6366f1', '#f59e42', '#10b981', '#f43f5e'],
        },
      ],
    };
  }
}
